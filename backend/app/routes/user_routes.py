from fastapi import APIRouter, Depends

from app.middleware.auth_middleware import get_current_user

from app.config.database import assessments_collection

router = APIRouter(
    prefix="/api/user",
    tags=["User Dashboard"]
)


@router.get("/dashboard")
def get_dashboard(
    current_user: dict = Depends(get_current_user)
):

    latest_assessment = assessments_collection.find_one(
        {},
        {"_id": 0},
        sort=[("_id", -1)]
    )

    if not latest_assessment:

        return {
            "message": "No assessment found"
        }

    return {
        "message": "Dashboard fetched successfully",
        "user": current_user,
        "dashboard": latest_assessment
    }