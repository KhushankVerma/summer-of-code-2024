from flask import jsonify, request, render_template, Blueprint
from ..models import InventoryItem,Customer
from ..database import db

staff_bp = Blueprint('staff', __name__, url_prefix='/staff')