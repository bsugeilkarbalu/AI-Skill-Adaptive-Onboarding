from fastapi import APIRouter, Depends

from app.middleware.auth_middleware import get_current_user
from app.middleware.role_middleware import require_role

from app.config.database import (
    users_collection,
    assessments_collection
)

router = APIRouter(
    prefix="/api/admin",
    tags=["Admin Dashboard"]
)


@router.get("/dashboard")
def admin_dashboard(
    current_user: dict = Depends(get_current_user)
):
    require_role(current_user, ["admin"])

    total_users = users_collection.count_documents({})
    total_assessments = assessments_collection.count_documents({})

    all_assessments = list(
        assessments_collection.find({}, {"_id": 0})
    )

    average_score = 0

    if all_assessments:
        total_percentage = sum(
            item.get("percentage", 0)
            for item in all_assessments
        )

        average_score = total_percentage / len(all_assessments)

    latest_results = list(
        assessments_collection.find({}, {"_id": 0})
        .sort("_id", -1)
        .limit(5)
    )

    return {
        "message": "Admin dashboard fetched successfully",
        "admin": current_user,
        "total_users": total_users,
        "total_assessments": total_assessments,
        "average_score": round(average_score, 2),
        "latest_results": latest_results
    }