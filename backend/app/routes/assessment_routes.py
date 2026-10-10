from fastapi import APIRouter
from app.controllers.assessment_controller import (
    start_assessment,
    evaluate_answers
)

router = APIRouter(
    prefix="/api/assessment",
    tags=["Assessment"]
)


@router.post("/start")
def assessment_api(data: dict):

    skills = data.get("skills", [])

    return start_assessment(skills)


@router.post("/submit")
def submit_assessment(data: dict):

    submitted_answers = data.get("answers", [])

    return evaluate_answers(submitted_answers)