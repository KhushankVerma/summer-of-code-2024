import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or '2yWO6IAYghv1NxEpsw7Ce6SNCJrhMzlQ'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'postgresql://Khushank:Khushank@localhost:5432/GroceryDatabase'
    SQLALCHEMY_TRACK_MODIFICATIONS = False