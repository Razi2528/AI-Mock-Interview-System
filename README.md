# Hirely AI

This repository contains the Hirely AI frontend (Vite + React + TypeScript) and backend (FastAPI + MongoDB).

---

## Setup Instructions

### Environment Variables

Before running the application, you need to set up your environment variables. 

1.  **Copy the template**:
    ```powershell
    # Root directory
    Copy-Item .env.example .env
    ```
2.  **Configure `.env`**: Open the newly created `.env` file and fill in your MongoDB Atlas connection string and other secrets.

> [!IMPORTANT]
> Never commit your `.env` file to git. It is already ignored by `.gitignore`.

### Backend (Windows PowerShell)

```powershell
# Create and activate a virtual environment
python -m venv .venv
.\.venv\Scripts\Activate.ps1

# Install dependencies
python -m pip install -r backend/requirements.txt

# Start the backend
python -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend (Windows PowerShell)

```powershell
cd frontend
npm install
npm run dev
```

---

## Notes

- Make sure MongoDB (or Atlas) is running and accessible at the URL configured in `.env`.
- After starting the backend, API docs are available at `http://localhost:8000/docs`.
- Use `.env.example` as a template for team synchronization.
