from fastapi import HTTPException

from app.config.database import users_collection
from app.utils.password_hash import hash_password, verify_password
from app.utils.jwt_handler import create_access_token


def register_user(user):
    existing_user = users_collection.find_one({"email": user.email})

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hash_password(user.password),
        "role": user.role
    }

    result = users_collection.insert_one(new_user)

    return {
        "message": "User registered successfully",
        "user_id": str(result.inserted_id),
        "role": user.role
    }


def login_user(user):
    existing_user = users_collection.find_one({"email": user.email})

    if not existing_user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if not verify_password(user.password, existing_user["password"]):
        raise HTTPException(
            status_code=401,
            detail="Invalid password"
        )

    token = create_access_token({
        "user_id": str(existing_user["_id"]),
        "email": existing_user["email"],
        "role": existing_user.get("role", "candidate")
    })

    return {
        "message": "Login successful",
        "access_token": token,
        "token_type": "bearer",
        "role": existing_user.get("role", "candidate")
    }