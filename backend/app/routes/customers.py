from flask import jsonify, request, render_template, Blueprint
from ..models import InventoryItem,Customer
from ..database import db

customers_bp = Blueprint('customers', __name__, url_prefix='/customers')