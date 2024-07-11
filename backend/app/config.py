import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = 'dev'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'postgresql://Khushank:Khushank@localhost:5432/GroceryDatabase'
    SQLALCHEMY_TRACK_MODIFICATIONS = False