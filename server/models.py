from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Injury(db.Model, SerializerMixin):

    # Setting up the table

    __tablename__ = 'injuries'

    id = db.Column(db.Integer, primary_key=True)
    part_of_body = db.Column(db.String)
    type_of_injury = db.Column(db.String)

    # Setting up relationships

    users = db.relationship("User", cascade="all, delete", backref="injury")

    # Setting up serailization

    serialize_rules = ('-users.injury',)

    def __repr__(self):
        return f'<Injury {self.id}>'


class Strengthening(db.Model, SerializerMixin):

    # Setting up the table

    __tablename__ = 'strengthenings'

    id = db.Column(db.Integer, primary_key=True)
    part_of_body = db.Column(db.String)
    movement = db.Column(db.String)
    equipment = db.Column(db.String)
    
    # Setting up the relationships

    users = db.relationship("User", cascade="all, delete", backref="strengthening")
    
    # Setting up serailization

    serialize_rules = ('-users.strengthening',)
    
    def __repr__(self):
        return f'<Strengthening {self.id}>'


class Mobility(db.Model, SerializerMixin):

    # Setting up the table

    __tablename__ = 'mobilities'

    id = db.Column(db.Integer, primary_key=True)
    part_of_body = db.Column(db.String)
    movement = db.Column(db.String)
    equipment = db.Column(db.String)

    # Setting up the relationships

    users = db.relationship("User", cascade="all, delete", backref="mobility")
    
    # Setting up serailization

    serialize_rules = ('-users.mobility',)
    
    def __repr__(self):
        return f'<Mobility {self.id}>'


class Flexibility(db.Model, SerializerMixin):

    # Setting up the table

    __tablename__ = 'flexibilities'

    id = db.Column(db.Integer, primary_key=True)
    part_of_body = db.Column(db.String)
    movement = db.Column(db.String)
    equipment = db.Column(db.String)
    

    # Setting up the relationships

    users = db.relationship("User", cascade="all, delete", backref="flexibility")
    

    # Setting up serailization

    serialize_rules = ('-users.flexibility',)
    

    def __repr__(self):
        return f'<Flexibility {self.id}>'


class UserTherapist(db.Model, SerializerMixin):
    __tablename__ = 'user_therapists'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    therapist_id = db.Column(db.Integer, db.ForeignKey("therapists.id"))
    serialize_rules = ('-user.user_therapists', '-therapist.user_therapists',)

    def to_dict(self):
        # Customize the serialization output
        return {
            'user_id': self.user_id,
       
            'therapist_id': self.therapist_id,
        }


class User(db.Model, SerializerMixin):

    # Setting up the table

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)

    # Setting up the relationships

    injury_id = db.Column(db.Integer, db.ForeignKey("injuries.id"))
    strengthening_id = db.Column(db.Integer, db.ForeignKey("strengthenings.id"))
    mobility_id = db.Column(db.Integer, db.ForeignKey("mobilities.id"))
    flexibility_id = db.Column(db.Integer, db.ForeignKey("flexibilities.id"))
    user_therapists = db.relationship('UserTherapist', backref='user')

    # Setting up serilization

    serialize_rules = ("-injury.users", "-strengthening.users", "-mobility.users", "-flexibility.users", "-user_therapists")

    @validates('username')
    def validate_username(self, key, value):
        if len(value) < 4:
            raise ValueError("Username must be at least 4 characters long.")
        return value

    @validates('password')
    def validate_password(self, key, value):
        if len(value) < 4:
            raise ValueError("Password must be at least 4 characters long.")
        return value

    def __repr__(self):
        return f'<User {self.id}>'

class Therapist(db.Model, SerializerMixin):
    __tablename__ = 'therapists'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    specialization = db.Column(db.String)

    user_therapists = db.relationship('UserTherapist', backref='therapists')

    serialize_rules = ("-users", "-user_therapists")

    def __repr__(self):
        return f'<Therapist {self.id}>'



def _repr_(self):
        return f'<Session {self.id}>'

