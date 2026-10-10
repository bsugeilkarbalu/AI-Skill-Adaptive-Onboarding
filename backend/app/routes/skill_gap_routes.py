from fastapi import APIRouter

router = APIRouter(
    prefix="/api/skill-gap",
    tags=["Skill Gap Analysis"]
)

@router.post("/analyze")
def analyze_skill_gap(data: dict):
    candidate_skills = set(skill.lower() for skill in data.get("candidate_skills", []))
    required_skills = set(skill.lower() for skill in data.get("required_skills", []))

    missing_skills = list(required_skills - candidate_skills)
    matched_skills = list(required_skills & candidate_skills)

    match_percentage = 0
    if required_skills:
        match_percentage = (len(matched_skills) / len(required_skills)) * 100

    return {
        "message": "Skill gap analysis completed",
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "match_percentage": round(match_percentage, 2)
    }