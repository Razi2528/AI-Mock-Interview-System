from fastapi import APIRouter, HTTPException, status, Depends
from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta
from bson import ObjectId

from .schemas import UserCreate, UserOut, Token, TokenData
from .db import users_collection
from .config import settings

router = APIRouter(prefix="/auth", tags=["auth"])

# Use a pure-Python backend to avoid native bcrypt incompatibilities in some environments
pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")


def hash_password(password: str) -> str:
    try:
        # pbkdf2_sha256 avoids bcrypt's 72-byte limit and native dependency issues
        return pwd_context.hash(password)
    except Exception as exc:
        # Raise a clearer error for the caller
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Password hashing failed: {str(exc)}")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        return pwd_context.verify(plain_password, hashed_password)
    except Exception:
        return False


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.access_token_expire_minutes)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.secret_key, algorithm=settings.algorithm)
    return encoded_jwt


@router.post("/signup", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def signup(user: UserCreate):
    existing = await users_collection.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    try:
        hashed = hash_password(user.password)
    except HTTPException:
        # re-raise hashing HTTP errors
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Internal server error")

    user_doc = {
        "email": user.email,
        "password": hashed,
        "full_name": user.full_name,
        "created_at": datetime.utcnow(),
    }

    try:
        result = await users_collection.insert_one(user_doc)
    except Exception as exc:
        # e.g., duplicate key or db error
        raise HTTPException(status_code=400, detail=str(exc))

    user_doc["id"] = str(result.inserted_id)
    # do not return password
    user_doc.pop("password", None)
    return UserOut(**user_doc)


from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


@router.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # form_data.username is used as email
    user = await users_collection.find_one({"email": form_data.username})
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")

    if not verify_password(form_data.password, user.get("password")):
        raise HTTPException(status_code=401, detail="Incorrect email or password")

    token_expires = timedelta(minutes=settings.access_token_expire_minutes)
    access_token = create_access_token({"sub": str(user.get("_id")), "email": user.get("email")}, expires_delta=token_expires)
    return Token(access_token=access_token)


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.secret_key, algorithms=[settings.algorithm])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = await users_collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise credentials_exception

    user_out = {
        "id": str(user.get("_id")),
        "email": user.get("email"),
        "full_name": user.get("full_name"),
        "created_at": user.get("created_at"),
    }
    return UserOut(**user_out)


@router.get("/me", response_model=UserOut)
async def read_me(current_user: UserOut = Depends(get_current_user)):
    return current_user

