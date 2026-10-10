from fastapi import APIRouter
from app.config.database import assessments_collection

router = APIRouter(
    prefix="/api/weakness",
    tags=["Weakness Analysis"]
)

@router.get("/latest")
def latest_weakness_analysis():
    latest = assessments_collection.find_one(
        {},
        {"_id": 0},
        sort=[("_id", -1)]
    )

    if not latest:
        return {"message": "No assessment found"}

    weak_questions = []

    for item in latest.get("results", []):
        if item.get("is_correct") == False:
            weak_questions.append({
                "question": item.get("question"),
                "your_answer": item.get("your_answer"),
                "correct_answer": item.get("correct_answer")
            })

    if not weak_questions:
        return {
            "message": "Excellent performance",
            "weakness": []
        }

    return {
        "message": "Weakness analysis completed",
        "weakness": weak_questions,
        "suggestion": "Revise the topics related to wrong answers"
    }