from app.config.database import question_bank_collection


def generate_assessment(skills):

    questions = []

    for skill in skills:

        skill_questions = question_bank_collection.find(
            {"skill": skill.lower()},
            {
                "_id": 0,
                "correct_answer": 0
            }
        )

        questions.extend(list(skill_questions))

    return questions