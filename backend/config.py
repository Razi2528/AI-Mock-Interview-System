from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # Change SECRET_KEY in .env for production
    secret_key: str = "change-me-to-a-secure-random-value"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24 * 7  # 7 days

    mongodb_url: str = "mongodb://localhost:27017/"
    db_name: str = "ai_mock_interview"

    model_config = {
        "env_file": ".env",
        "env_file_encoding": "utf-8",
    }


settings = Settings()
