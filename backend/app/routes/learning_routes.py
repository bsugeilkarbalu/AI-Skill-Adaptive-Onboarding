from fastapi import APIRouter

router = APIRouter(
    prefix="/api/learning",
    tags=["Learning Path"]
)

LEARNING_PATHS = {
    "python": ["Python Basics", "OOP in Python", "File Handling", "FastAPI Basics"],
    "mongodb": ["NoSQL Basics", "MongoDB CRUD", "Indexing", "Aggregation"],
    "fastapi": ["API Basics", "FastAPI Routing", "JWT Auth", "MongoDB Integration"],
    "react": ["React Components", "Props and State", "Hooks", "API Integration"],
    "javascript": ["JS Basics", "DOM", "Promises", "Async/Await"],
    "sql": ["SQL Basics", "Joins", "Group By", "Subqueries"],
    "docker": ["Container Basics", "Dockerfile", "Images", "Deployment"],
    "machine learning": ["ML Basics", "Supervised Learning", "Model Training", "Evaluation Metrics"]
}

@router.post("/recommend")
def recommend_learning_path(data: dict):
    skills = data.get("skills", [])

    recommendations = {}

    for skill in skills:
        skill_lower = skill.lower()
        recommendations[skill_lower] = LEARNING_PATHS.get(
            skill_lower,
            ["Basic concepts", "Practice exercises", "Mini project"]
        )

    return {
        "message": "Learning path generated successfully",
        "learning_paths": recommendations
    }