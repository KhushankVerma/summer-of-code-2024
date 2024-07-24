from flask import jsonify, request, render_template, Blueprint
from ..models import InventoryItem,Customer
from ..database import db
products_bp = Blueprint('products', __name__, url_prefix='/products')
from flask_login import login_required 

@products_bp.route('/', methods=['GET'])
@login_required  # Ensure the user is logged in before they can log out
def get_inventory_items():
    items = InventoryItem.query.all()
    return jsonify([item.to_dict() for item in items])

@products_bp.route('/<string:item_sku>', methods=['GET'])
@login_required  # Ensure the user is logged in before they can log out
def get_inventory_item(item_sku):
    item = InventoryItem.query.get(item_sku)
    if item:
        return jsonify(item.to_dict())
    else:
        return jsonify({'error': 'Item not found'}), 404

@products_bp.route('/', methods=['POST'])
@login_required  # Ensure the user is logged in before they can log out
def create_inventory_item():
    data = request.get_json()
    item_name = data.get('name')
    item_description = data.get('description')
    item_price = data.get('price')
    item_qty = data.get('qty')

    if not item_name or not item_description or not item_price or not item_qty:
        return jsonify({"error": "Missing required fields"}), 400

    existing_user = InventoryItem.query.filter_by(Item_Name=item_name).first()
    if existing_user:
        return jsonify({"error": "item already exists"}), 400



    new_item = InventoryItem(
        Item_Name=item_name,
        Item_Description=item_description,
        Item_Price=item_price,
        Item_Qty=item_qty
    )


    db.session.add(new_item)
    db.session.commit()
    return jsonify(new_item.to_dict()), 201

@products_bp.route('/<string:item_sku>', methods=['PUT'])
@login_required  # Ensure the user is logged in before they can log out
def update_inventory_item(item_sku):
    item = InventoryItem.query.get(item_sku)
    if item:
        data = request.get_json()
        for key, value in data.items():
            setattr(item, key, value)
        db.session.commit()
        return jsonify(item.to_dict())
    else:
        return jsonify({'error': 'Item not found'}), 404

@products_bp.route('/<string:item_sku>', methods=['DELETE'])
@login_required  # Ensure the user is logged in before they can log out
def delete_inventory_item(item_sku):
    item = InventoryItem.query.get(item_sku)
    if item:
        db.session.delete(item)
        db.session.commit()
        return jsonify({'message': 'Item deleted successfully'}), 204
    else:
        return jsonify({'error': 'Item not found'}), 404