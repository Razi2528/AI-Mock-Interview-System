from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .auth import router as auth_router
from .db import users_collection

app = FastAPI()

# Allow the frontend development server to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

@app.on_event("startup")
async def startup_event():
    # ensure unique index on email
    await users_collection.create_index("email", unique=True)


@app.get("/")
def read_root():
    return {"message": "Hirely AI backend is running"}
