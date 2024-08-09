from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .database import db, bcrypt, login_manager
from .models import Staff
from app.routes import register_blueprints
migrate = Migrate()
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    cors = CORS(app, supports_credentials=True)
    db.init_app(app)
    migrate.init_app(app, db)  # Initialize Flask-Migrate
    bcrypt.init_app(app)
    login_manager.init_app(app)
# Register the blueprints
    register_blueprints(app)
    
    return app

@login_manager.user_loader
def load_user(user_id):
    return Staff.query.get(int(user_id))
