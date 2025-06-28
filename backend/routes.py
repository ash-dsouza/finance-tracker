from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required
from models import db, User, Transaction
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

auth_bp = Blueprint('auth', __name__)
transaction_bp = Blueprint('transaction', __name__)

@auth_bp.route('/')
def index():
    return "Welcome to the Personal Finance Tracker API!"


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'])
    new_user = User(username=data['username'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        token = create_access_token(identity=user.id)
        return jsonify({'token': token})
    return jsonify({'message': 'Invalid credentials'}), 401

@transaction_bp.route('/transactions', methods=['POST'])
@jwt_required()
def add_transaction():
    data = request.get_json()
    new_transaction = Transaction(
        user_id=data['user_id'],
        amount=data['amount'],
        category=data['category'],
        description=data.get('description', ''),
        date=datetime.strptime(data['date'], '%Y-%m-%d')
    )
    db.session.add(new_transaction)
    db.session.commit()
    return jsonify({'message': 'Transaction added successfully'})

@transaction_bp.route('/transactions/<int:user_id>', methods=['GET'])
@jwt_required()
def get_transactions(user_id):
    transactions = Transaction.query.filter_by(user_id=user_id).all()
    result = []
    for t in transactions:
        result.append({
            'id': t.id,
            'amount': t.amount,
            'category': t.category,
            'description': t.description,
            'date': t.date.strftime('%Y-%m-%d')
        })
    return jsonify(result)
