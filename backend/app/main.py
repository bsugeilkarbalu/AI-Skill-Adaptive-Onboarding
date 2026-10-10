from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.database import db

from app.routes.auth_routes import router as auth_router
from app.routes.resume_routes import router as resume_router
from app.routes.assessment_routes import router as assessment_router
from app.routes.recommendation_routes import router as recommendation_router
from app.routes.user_routes import router as user_router
from app.routes.admin_routes import router as admin_router
from app.routes.skill_gap_routes import router as skill_gap_router
from app.routes.leaderboard_routes import router as leaderboard_router
from app.routes.weakness_routes import router as weakness_router
from app.routes.learning_routes import router as learning_router

app = FastAPI(
    title="AI Skill Adaptive Onboarding API",
    description="Backend API for AI-based skill adaptive onboarding system",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ROUTERS
app.include_router(auth_router)
app.include_router(resume_router)
app.include_router(assessment_router)
app.include_router(recommendation_router)
app.include_router(user_router)
app.include_router(admin_router)
app.include_router(skill_gap_router)
app.include_router(leaderboard_router)
app.include_router(weakness_router)
app.include_router(learning_router)

@app.get("/")
def home():
    return {
        "message": "AI Skill Adaptive Onboarding Backend Running"
    }

@app.get("/db-test")
def db_test():

    collections = db.list_collection_names()

    return {
        "message": "MongoDB connected successfully",
        "collections": collections
    }