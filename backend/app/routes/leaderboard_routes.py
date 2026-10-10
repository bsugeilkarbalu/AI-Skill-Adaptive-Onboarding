from fastapi import APIRouter
from app.config.database import assessments_collection

router = APIRouter(
    prefix="/api/leaderboard",
    tags=["Leaderboard"]
)

@router.get("/")
def get_leaderboard():

    leaderboard_data = list(
        assessments_collection.find(
            {},
            {
                "_id": 0
            }
        ).sort("percentage", -1).limit(10)
    )

    ranked_results = []

    rank = 1

    for item in leaderboard_data:

        ranked_results.append({
            "rank": rank,
            "percentage": item.get("percentage", 0),
            "obtained_score": item.get("obtained_score", 0),
            "total_score": item.get("total_score", 0)
        })

        rank += 1

    return {
        "message": "Leaderboard fetched successfully",
        "leaderboard": ranked_results
    }