import os
import shutil
import pdfplumber
from docx import Document

UPLOAD_FOLDER = "uploads"

def save_uploaded_file(file):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return file_path

def extract_text_from_pdf(file_path):
    text = ""

    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            extracted = page.extract_text()

            if extracted:
                text += extracted + "\n"

    return text

def extract_text_from_docx(file_path):
    doc = Document(file_path)

    text = "\n".join([para.text for para in doc.paragraphs])

    return text