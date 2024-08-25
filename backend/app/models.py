from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from .database import db, bcrypt
from flask_login import UserMixin


class InventoryItem(db.Model):
    Item_SKU = db.Column(db.String(100), primary_key=True)
    Item_Name = db.Column(db.String(64), index=True, unique=True)
    Item_Description = db.Column(db.Text)
    Item_Price = db.Column(db.Float)
    Item_Qty = db.Column(db.Integer)

    def __repr__(self):
        return f'<InventoryItem {self.name}>'

    def to_dict(self):
        # Return a dictionary with all columns and their values
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}

class Customer(db.Model):
    c_ID = db.Column(db.Integer, primary_key=True)
    c_name = db.Column(db.String(64), index=True, unique=True)
    c_email = db.Column(db.String(120), index=True, unique=True)
    c_contact = db.Column(db.String(15), index=True, unique=True)
    c_transactions = db.relationship('Transaction', backref='customer')
    def __repr__(self):
        return f'<Customer {self.name}>'
    
    def to_dict(self):
        # Return a dictionary with all columns and their values
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}



class Staff(UserMixin, db.Model):
    s_ID = db.Column(db.Integer, primary_key=True)
    s_name = db.Column(db.String(64), index=True, unique=True)
    s_email = db.Column(db.String(120), index=True, unique=True)
    s_password = db.Column(db.String(128), nullable=False)
    s_isAdmin = db.Column(db.Boolean, nullable=False)
    s_contact = db.Column(db.String(15), index=True, unique=True)
    c_transactions = db.relationship('Transaction', backref='staff')

    def __repr__(self):
        return f'<Customer {self.name}>'
    
    def to_dict(self):
        # Return a dictionary with all columns and their values
        return {"s_ID": getattr(self, "s_ID"), "s_name": getattr(self, "s_name"), "s_email": getattr(self, "s_email"), "s_contact": getattr(self, "s_contact"), "s_isAdmin": getattr(self, "s_isAdmin")}
    
    def set_password(self, password):
        self.s_password = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.s_password, password)
    
    def get_id(self):
           return (self.s_ID)

class Transaction(db.Model):
    t_ID = db.Column(db.Integer, primary_key=True)
    c_ID = db.Column(db.Integer, db.ForeignKey('customer.c_ID'))
    s_ID = db.Column(db.Integer, db.ForeignKey('staff.s_ID'))
    t_date = db.Column(db.DateTime, nullable=False,
        default=datetime.utcnow)
    t_amount = db.Column(db.Integer)
    t_category = db.Column(db.String(64), nullable=False)

    def __repr__(self):
        return f'<Customer {self.name}>'
    
    def to_dict(self):
        # Return a dictionary with all columns and their values
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}

