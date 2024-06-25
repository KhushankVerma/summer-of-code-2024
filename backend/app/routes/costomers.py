from app import app


@app.route('/costomers')
def index():
    return "Hello, World!"