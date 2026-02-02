from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

# Temporary in-memory users (hackathon safe)
users = []

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "All fields required"}), 400

    for u in users:
        if u["email"] == email:
            return jsonify({"message": "User already exists"}), 400

    users.append({
        "name": name,
        "email": email,
        "password": password
    })

    return jsonify({"message": "Registration successful"})


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    for u in users:
        if u["email"] == email and u["password"] == password:
            return jsonify({
                "token": "dummy-token",
                "message": "Login successful"
            })

    return jsonify({"message": "Invalid credentials"}), 401