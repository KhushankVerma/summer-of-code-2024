import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = 'dev'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'postgresql://default:YhU2oC8xKSqN@ep-jolly-band-a4tozt5y.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require'
    SQLALCHEMY_TRACK_MODIFICATIONS = False