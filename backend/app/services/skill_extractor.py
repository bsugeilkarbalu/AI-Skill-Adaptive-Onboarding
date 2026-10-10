import spacy

nlp = spacy.load("en_core_web_sm")

SKILLS_DB = [
    "python",
    "java",
    "javascript",
    "react",
    "nodejs",
    "mongodb",
    "mysql",
    "fastapi",
    "django",
    "flask",
    "html",
    "css",
    "machine learning",
    "deep learning",
    "sql",
    "opencv",
    "tensorflow",
    "pandas",
    "numpy",
    "spacy"
]

def extract_skills(text):

    text = text.lower()

    found_skills = []

    for skill in SKILLS_DB:
        if skill.lower() in text:
            found_skills.append(skill)

    return list(set(found_skills))