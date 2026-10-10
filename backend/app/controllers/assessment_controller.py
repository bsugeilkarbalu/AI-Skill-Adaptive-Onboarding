from app.services.adaptive_test_service import generate_assessment
from app.config.database import question_bank_collection, assessments_collection


def start_assessment(skills):
    questions = generate_assessment(skills)

    return {
        "message": "Assessment generated successfully",
        "questions": questions
    }


def evaluate_answers(submitted_answers):
    total_score = 0
    obtained_score = 0
    results = []

    for answer in submitted_answers:
        question_text = answer.get("question")
        user_answer = answer.get("answer")

        db_question = question_bank_collection.find_one({
            "question": question_text
        })

        if db_question:
            correct_answer = db_question["correct_answer"]
            question_score = db_question["score"]

            total_score += question_score

            is_correct = (
                user_answer.strip().lower()
                ==
                correct_answer.strip().lower()
            )

            if is_correct:
                obtained_score += question_score

            results.append({
                "question": question_text,
                "your_answer": user_answer,
                "correct_answer": correct_answer,
                "is_correct": is_correct,
                "score": question_score if is_correct else 0
            })

    percentage = 0
    if total_score > 0:
        percentage = (obtained_score / total_score) * 100

    assessment_data = {
        "total_score": total_score,
        "obtained_score": obtained_score,
        "percentage": round(percentage, 2),
        "results": results
    }

    insert_result = assessments_collection.insert_one(assessment_data)

    return {
        "message": "Assessment evaluated and saved successfully",
        "assessment_id": str(insert_result.inserted_id),
        "total_score": total_score,
        "obtained_score": obtained_score,
        "percentage": round(percentage, 2),
        "results": results
    }