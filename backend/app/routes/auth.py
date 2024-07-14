from flask import Blueprint, request, jsonify
from flask_login import login_user,logout_user, login_required ,current_user
from app.models import Staff
from ..database import db, bcrypt

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    is_admin = data.get('is_admin', False)
    contact = data.get('contact')

    if not name or not email or not password or not contact:
        return jsonify({"error": "Missing required fields"}), 400

    if not isinstance(is_admin, bool):
        return jsonify({"error": "is_admin must be a boolean value"}), 400



    existing_user = Staff.query.filter_by(s_email=email).first()
    if existing_user:
        return jsonify({"error": "User with this email already exists"}), 400
    
    existing_user = Staff.query.filter_by(s_contact=contact).first()
    if existing_user:
        return jsonify({"error": "User with this email already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_staff = Staff(
        s_name=name,
        s_email=email,
        s_password=hashed_password,
        s_isAdmin=is_admin,
        s_contact=contact
    )

    db.session.add(new_staff)
    db.session.commit()

    return jsonify({"message": "Staff member registered successfully"}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user = Staff.query.filter_by(s_email=email).first()
    if user and user.check_password(password):
        login_user(user)
        return jsonify({'message': 'Logged in successfully'}), 200
    else:
        return jsonify({'message': 'Invalid email or password'}), 401


@auth_bp.route('/logout')
@login_required  # Ensure the user is logged in before they can log out
def logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully'}), 200

@auth_bp.route('/current_user')
@login_required  # Ensure the user is logged in to access their information
def get_current_user():
    return jsonify(current_user.to_dict())