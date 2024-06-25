from flask import Blueprint, render_template
from ..models import InventoryItem, Customer

bp = Blueprint('routes', __name__)

@bp.route('/')
def index():
    # Fetch data from the database
    items = InventoryItem.query.all()
    customers = Customer.query.all()

    # Render a template with the data
    return render_template('index.html', items=items, customers=customers)