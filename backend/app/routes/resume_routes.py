from fastapi import APIRouter, UploadFile, File
from app.controllers.resume_controller import upload_resume

router = APIRouter(
    prefix="/api/resume",
    tags=["Resume"]
)

@router.post("/upload")
def upload_resume_api(file: UploadFile = File(...)):
    return upload_resume(file)