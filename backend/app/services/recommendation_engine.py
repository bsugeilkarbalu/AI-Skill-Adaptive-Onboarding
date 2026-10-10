def generate_recommendation(skills, percentage):

    recommended_role = "General Developer"

    if "python" in skills and "fastapi" in skills:
        recommended_role = "Python Backend Developer"

    elif "react" in skills and "javascript" in skills:
        recommended_role = "Frontend Developer"

    elif "machine learning" in skills:
        recommended_role = "Machine Learning Engineer"

    elif "mongodb" in skills:
        recommended_role = "Database Developer"

    skill_level = "Beginner"

    if percentage >= 80:
        skill_level = "Advanced"

    elif percentage >= 50:
        skill_level = "Intermediate"

    recommendation = ""

    if percentage >= 80:
        recommendation = "Eligible for technical interview"

    elif percentage >= 50:
        recommendation = "Needs moderate improvement"

    else:
        recommendation = "Needs skill development training"

    return {
        "recommended_role": recommended_role,
        "skill_level": skill_level,
        "recommendation": recommendation
    }