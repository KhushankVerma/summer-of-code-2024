from app import create_app, db
from app.models import InventoryItem, Customer

app = create_app()
app.app_context().push()

def populate_db():
    # Example data for InventoryItem
    items = [
        InventoryItem(name='Item1', quantity=100, price=10.99),
        InventoryItem(name='Item2', quantity=50, price=29.99),
        InventoryItem(name='Item3', quantity=200, price=4.99),
    ]
    
    # Example data for Customer
    customers = [
        Customer(name='John Doe', email='john.doe@example.com'),
        Customer(name='Jane Smith', email='jane.smith@example.com'),
        Customer(name='Alice Johnson', email='alice.johnson@example.com'),
    ]

    # Add items to the session
    for item in items:
        db.session.add(item)

    # Add customers to the session
    for customer in customers:
        db.session.add(customer)

    # Commit the session to the database
    db.session.commit()
    print("Example data added to the database.")

if __name__ == '__main__':
    populate_db()
