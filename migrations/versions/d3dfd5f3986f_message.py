"""message

Revision ID: d3dfd5f3986f
Revises: 
Create Date: 2023-10-09 12:08:25.706578

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd3dfd5f3986f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('flexibilities',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('part_of_body', sa.String(), nullable=True),
    sa.Column('movement', sa.String(), nullable=True),
    sa.Column('equipment', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('injuries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('part_of_body', sa.String(), nullable=True),
    sa.Column('type_of_injury', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('mobilities',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('part_of_body', sa.String(), nullable=True),
    sa.Column('movement', sa.String(), nullable=True),
    sa.Column('equipment', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('strengthenings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('part_of_body', sa.String(), nullable=True),
    sa.Column('movement', sa.String(), nullable=True),
    sa.Column('equipment', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_name', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=True),
    sa.Column('injury_id', sa.Integer(), nullable=True),
    sa.Column('strengthening_id', sa.Integer(), nullable=True),
    sa.Column('mobility_id', sa.Integer(), nullable=True),
    sa.Column('flexibility_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['flexibility_id'], ['flexibilities.id'], name=op.f('fk_users_flexibility_id_flexibilities')),
    sa.ForeignKeyConstraint(['injury_id'], ['injuries.id'], name=op.f('fk_users_injury_id_injuries')),
    sa.ForeignKeyConstraint(['mobility_id'], ['mobilities.id'], name=op.f('fk_users_mobility_id_mobilities')),
    sa.ForeignKeyConstraint(['strengthening_id'], ['strengthenings.id'], name=op.f('fk_users_strengthening_id_strengthenings')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('strengthenings')
    op.drop_table('mobilities')
    op.drop_table('injuries')
    op.drop_table('flexibilities')
    # ### end Alembic commands ###