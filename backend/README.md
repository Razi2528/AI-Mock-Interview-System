# Backend — Hirely AI

## Environment variables

1. Copy `backend/.env.example` to `backend/.env` and modify values (especially `SECRET_KEY`).
   - On macOS / Linux: `cp backend/.env.example backend/.env`
   - On Windows (PowerShell): `Copy-Item backend\.env.example backend\.env`

2. Values from `backend/.env` are loaded automatically by `pydantic.BaseSettings` (see `backend/config.py`).

3. Start the server:

```bash
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

## Security notes
- **Do not** commit `backend/.env` with secrets to git. Use CI/CD secret management for production.
- Rotate `SECRET_KEY` if it was exposed.
