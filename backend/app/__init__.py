from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.routes import bp as routes_bp  # Import the blueprint
from .database import db
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    
    db.init_app(app)
    migrate.init_app(app, db)  # Initialize Flask-Migrate
    
    app.register_blueprint(routes_bp)
    
    return app