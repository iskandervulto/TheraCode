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

    # Setting up serilization

    serialize_rules = ("-injury.users", "-strengthening.users", "-mobility.users", "-flexibility.users")

    def _repr_(self):
        return f'<User {self.id}>'




# class Trainer(db.Model, SerializerMixin):

#     # Setting up the table

#     __tablename__ = 'trainers'

#     id = db.Column(db.Integer, primary_key=True)
#     trainer_name = db.Column(db.String)
#     trainer_speciality = db.Column(db.String)

#     # Setting up the relationships

#     sessions = db.relationship("Session", cascade="all, delete", backref="trainer")

#     def _repr_(self):
#         return f'<Trainer {self.id}>'



# class Session(db.Model, SerializerMixin):

#     # Setting up the table

#     __tablename__ = 'sessions'

#     id = db.Column(db.Integer, primary_key=True)
#     session_date = db.Column(db.Date)
#     session_time = db.Column(db.Time)
#     trainer_id = db.Column(db.Integer, db.ForeignKey("trainers.id"))
#     patient_id = db.Column(db.Integer, db.ForeignKey("users.id"))
#     exercise_id = db.Column(db.Integer, db.ForeignKey("exercises.id"))

#     # Setting up the relationships

#     therapist = db.relationship("Trainer", backref="trainer_sessions")
#     patient = db.relationship("User", foreign_keys=[patient_id], backref="patient_sessions")
#     exercise = db.relationship("Exercise", backref="sessions")
#     injury = db.relationship("Injury", backref="sessions")

    def _repr_(self):
        return f'<Session {self.id}>'

