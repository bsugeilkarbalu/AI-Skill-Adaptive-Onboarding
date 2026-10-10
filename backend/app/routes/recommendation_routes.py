from fastapi import APIRouter
from app.controllers.recommendation_controller import get_recommendation

router = APIRouter(
    prefix="/api/recommendation",
    tags=["Recommendation"]
)

@router.post("/generate")
def recommendation_api(data: dict):

    return get_recommendation(data)