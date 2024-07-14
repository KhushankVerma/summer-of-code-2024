"""removed inventory item

Revision ID: 5fa8ab756e96
Revises: 4574f31598c3
Create Date: 2024-07-14 23:16:06.738606

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5fa8ab756e96'
down_revision = '4574f31598c3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_inventory_item_Item_Name', table_name='inventory_item')
    op.drop_table('inventory_item')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('inventory_item',
    sa.Column('Item_SKU', sa.VARCHAR(), server_default=sa.text('nextval(\'"inventory_item_Item_SKU_seq"\'::regclass)'), autoincrement=False, nullable=False),
    sa.Column('Item_Name', sa.VARCHAR(length=64), autoincrement=False, nullable=True),
    sa.Column('Item_Description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('Item_Price', sa.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('Item_Qty', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('Item_SKU', name='inventory_item_pkey')
    )
    op.create_index('ix_inventory_item_Item_Name', 'inventory_item', ['Item_Name'], unique=True)
    # ### end Alembic commands ###