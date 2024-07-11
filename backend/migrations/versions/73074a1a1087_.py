"""empty message

Revision ID: 73074a1a1087
Revises: 197e38f23023
Create Date: 2024-07-11 22:36:31.987332

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '73074a1a1087'
down_revision = '197e38f23023'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_inventory_item_name', table_name='inventory_item')
    op.drop_table('inventory_item')
    op.drop_index('ix_customer_email', table_name='customer')
    op.drop_index('ix_customer_name', table_name='customer')
    op.drop_table('customer')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('customer',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(length=64), autoincrement=False, nullable=True),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='customer_pkey')
    )
    op.create_index('ix_customer_name', 'customer', ['name'], unique=True)
    op.create_index('ix_customer_email', 'customer', ['email'], unique=True)
    op.create_table('inventory_item',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(length=64), autoincrement=False, nullable=True),
    sa.Column('quantity', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('price', sa.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='inventory_item_pkey')
    )
    op.create_index('ix_inventory_item_name', 'inventory_item', ['name'], unique=True)
    # ### end Alembic commands ###
