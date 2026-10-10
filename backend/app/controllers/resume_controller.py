from fastapi import UploadFile, HTTPException

from app.utils.file_handler import (
    save_uploaded_file,
    extract_text_from_pdf,
    extract_text_from_docx
)

from app.services.skill_extractor import extract_skills


def upload_resume(file: UploadFile):

    if not file.filename.endswith((".pdf", ".docx")):
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed"
        )

    file_path = save_uploaded_file(file)

    if file.filename.endswith(".pdf"):
        extracted_text = extract_text_from_pdf(file_path)

    else:
        extracted_text = extract_text_from_docx(file_path)

    # AI Skill Extraction
    skills = extract_skills(extracted_text)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "skills": skills,
        "extracted_text": extracted_text[:1000]
    }