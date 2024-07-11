from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
class InventoryItem(db.Model):
    Item_SKU = db.Column(db.Integer, primary_key=True)
    Item_Name = db.Column(db.String(64), index=True, unique=True)
    Item_Description = db.Column(db.Text)
    Item_Price = db.Column(db.Float)
    Item_Qty = db.Column(db.Integer)

    def __repr__(self):
        return f'<InventoryItem {self.name}>'

class Customer(db.Model):
    c_ID = db.Column(db.Integer, primary_key=True)
    c_name = db.Column(db.String(64), index=True, unique=True)
    c_email = db.Column(db.String(120), index=True, unique=True)
    c_contact = db.Column(db.String(15), index=True, unique=True)
    c_transactions = db.relationship('Transaction', backref='customer')
    def __repr__(self):
        return f'<Customer {self.name}>'



class Staff(db.Model):
    s_ID = db.Column(db.Integer, primary_key=True)
    s_name = db.Column(db.String(64), index=True, unique=True)
    s_email = db.Column(db.String(120), index=True, unique=True)
    s_isAdmin = db.Column(db.Integer)
    s_contact = db.Column(db.String(15), index=True, unique=True)
    c_transactions = db.relationship('Transaction', backref='staff')

    def __repr__(self):
        return f'<Customer {self.name}>'

class Transaction(db.Model):
    t_ID = db.Column(db.Integer, primary_key=True)
    c_ID = db.Column(db.Integer, db.ForeignKey('customer.id'))
    s_ID = db.Column(db.Integer, db.ForeignKey('staff.id'))
    t_date = db.Column(db.DateTime, nullable=False,
        default=datetime.utcnow)
    t_amount = db.Column(db.Integer)
    t_category = db.Column(db.String(64), nullable=False)

    def __repr__(self):
        return f'<Customer {self.name}>'

