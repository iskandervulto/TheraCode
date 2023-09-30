from models import db, Injury, Strengthening, Mobility, Flexibility, User
from flask_migrate import Migrate
from flask import Flask, request, make_response
from flask_restful import Api, Resource
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)

@app.route('/')
def index():
    return '<h1>Iskander\'s Backend</h1>'


class Injuries(Resource):

    def get(self):
        injuries = [injury.to_dict(rules=('-users',)) for injury in Injury.query.all()]
        return make_response(injuries, 200)

api.add_resource(Injuries, "/injuries")


class InjuryById(Resource):

    def get(self, id):
        injury = Injury.query.filter(Injury.id == id).one_or_none()
        if injury is None:
            return make_response({'error': 'Injury not found'}, 404)
        return make_response(injury.to_dict(rules=('-users',)), 200)

api.add_resource(InjuryById, "/injuries/<int:id>")


class Strengthenings(Resource):

    def get(self):
        strengthenings = [strengthening.to_dict(rules=('-users',)) for strengthening in Strengthening.query.all()]
        return make_response(strengthenings, 200)

api.add_resource(Strengthenings, "/strengthenings")


class StrengtheningById (Resource):

    def get(self, id):
        strengthening = Strengthening.query.filter(Strengthening.id == id).one_or_none()
        if strengthening is None:
            return make_response({'error': 'Strenghtening not found'}, 404)
        return make_response(strengthening.to_dict(rules=('-users',)), 200)

api.add_resource(StrengtheningById, "/strengthenings/<int:id>")


class Mobilities(Resource):

    def get(self):
        mobilities = [mobility.to_dict(rules=('-users',)) for mobility in Mobility.query.all()]
        return make_response(mobilities, 200)

api.add_resource(Mobilities, "/mobilities")


class MobilityById(Resource):

    def get(self, id):
        mobility = Mobility.query.filter(Mobility.id == id).one_or_none()
        if mobility is None:
            return make_response({'error': 'Mobility not found'}, 404)
        return make_response(mobility.to_dict(rules=('-users',)), 200)

api.add_resource(MobilityById, "/mobilities/<int:id>")


class Flexibilities(Resource):

    def get(self):
        flexibilities = [flexibility.to_dict(rules=('-users',)) for flexibility in Flexibility.query.all()]
        return make_response(flexibilities, 200)

api.add_resource(Flexibilities, "/flexibilities")


class FlexibilityById(Resource):

    def get(self, id):
        flexibility = Flexibility.query.filter(Flexibility.id == id).one_or_none()
        if flexibility is None:
            return make_response({'error': 'Flexibility not found'}, 404)
        return make_response(flexibility.to_dict(rules=('-users',)), 200)

api.add_resource(FlexibilityById, "/flexibilities/<int:id>")


class Users(Resource):

    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)

    def post(self):
        try:
            data = request.get_json()
            user = User(
                price=data["price"],          #CHANGE THIS
                vendor_id=data["vendor_id"],  #CHANGE THIS
                sweet_id=data["sweet_id"]    #CHANGE THIS
            )
            db.session.add(user)
            db.session.commit()
            return make_response(user.to_dict(), 201)
        except ValueError as error:
            print(error)
            return make_response({"errors": ["validation errors"]}, 400)

api.add_resource(Users, "/users")


class UserById(Resource):

    def get(self, id):
        user = User.query.filter(User.id == id).one_or_none()
        if user is None:
            return make_response({'error': 'User not found'}, 404)
        return make_response(user.to_dict(), 200)


    def delete(self, id):
        user = User.query.filter(User.id==id).one_or_none()
        if user is None:
            return make_response({'error': 'User is not found'}, 404)
        db.session.delete(user)
        db.session.commit()
        return make_response({}, 204)


api.add_resource(UserById, "/users/<int:id>")





if __name__ == '__main__':
    app.run(port=5555, debug=True)
