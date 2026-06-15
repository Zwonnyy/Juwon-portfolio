from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .data import portfolio_data

app = FastAPI(
    title="Juwon Portfolio API",
    description="FastAPI backend for the React portfolio site.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health_check():
    return {"status": "ok"}


@app.get("/api/portfolio")
def get_portfolio():
    return portfolio_data
