from pymongo import MongoClient
from app.config.settings import MONGO_URL, DATABASE_NAME

client = MongoClient(MONGO_URL)

db = client[DATABASE_NAME]

users_collection = db["users"]

resumes_collection = db["resumes"]

assessments_collection = db["assessments"]

question_bank_collection = db["question_bank"]