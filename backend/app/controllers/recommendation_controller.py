from app.services.recommendation_engine import generate_recommendation

def get_recommendation(data):

    skills = data.get("skills", [])
    percentage = data.get("percentage", 0)

    result = generate_recommendation(skills, percentage)

    return {
        "message": "Recommendation generated successfully",
        "data": result
    }