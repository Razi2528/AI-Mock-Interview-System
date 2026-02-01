# Hirely AI

This repository contains the Hirely AI frontend (Vite + React + TypeScript) and backend (FastAPI + MongoDB).

---

## Quick start

### Backend (Windows PowerShell)

```powershell
cd backend
# create and activate a virtual environment (optional but recommended)
python -m venv .venv
.\.venv\Scripts\Activate.ps1

# install dependencies and copy example env
python -m pip install -r requirements.txt
Copy-Item .env.example .env -ErrorAction SilentlyContinue

# start the backend
python -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000

# Or from repo root with venv python in one line (PowerShell)
cd "D:\DL\AI Mock Interview System"; & ".venv\Scripts\python.exe" -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

### Backend (Windows CMD)

```cmd
cd backend
python -m venv .venv
.venv\Scripts\activate.bat
python -m pip install -r requirements.txt
copy .env.example .env
python -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000


```

### Frontend (Windows PowerShell)

```powershell
cd frontend
npm install
npm run dev
```

### Frontend (Windows CMD)

```cmd
cd frontend
npm install
npm run dev
```

---

## Notes

- Make sure MongoDB is running and accessible at the URL configured in `backend/.env` (default: `mongodb://localhost:27017/`).
- After starting the backend, API docs are available at `http://localhost:8000/docs`.
- Do NOT commit real `.env` files with secrets to version control. Use `backend/.env.example` as a template.
