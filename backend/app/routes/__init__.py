from flask import Blueprint

# Import blueprints from each module
from app.routes.products import products_bp
from app.routes.customers import customers_bp
from app.routes.staff import staff_bp
from app.routes.auth import auth_bp


# Create a blueprint for the main application
main_bp = Blueprint('main', __name__)

# Register the imported blueprints with the main blueprint
def register_blueprints(app):
    app.register_blueprint(products_bp)
    app.register_blueprint(customers_bp)
    app.register_blueprint(staff_bp)
    app.register_blueprint(auth_bp)