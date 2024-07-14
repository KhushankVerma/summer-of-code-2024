"""added inventory item

Revision ID: 04a25c5d08f7
Revises: 5fa8ab756e96
Create Date: 2024-07-14 23:18:25.814472

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '04a25c5d08f7'
down_revision = '5fa8ab756e96'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('inventory_item',
    sa.Column('Item_SKU', sa.String(), nullable=False),
    sa.Column('Item_Name', sa.String(length=64), nullable=True),
    sa.Column('Item_Description', sa.Text(), nullable=True),
    sa.Column('Item_Price', sa.Float(), nullable=True),
    sa.Column('Item_Qty', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('Item_SKU')
    )
    op.create_index(op.f('ix_inventory_item_Item_Name'), 'inventory_item', ['Item_Name'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_inventory_item_Item_Name'), table_name='inventory_item')
    op.drop_table('inventory_item')
    # ### end Alembic commands ###
