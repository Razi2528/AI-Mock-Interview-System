from motor.motor_asyncio import AsyncIOMotorClient
from .config import settings

client = AsyncIOMotorClient(settings.mongodb_url)
db = client[settings.db_name]
users_collection = db.get_collection("users")
