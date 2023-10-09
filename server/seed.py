#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Injury, Strengthening, Mobility, Flexibility, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Clearing db...")
        Injury.query.delete()
        Strengthening.query.delete()
        Mobility.query.delete()
        Flexibility.query.delete()
        User.query.delete()

        print("Starting seed...")

        print("Seeding injuries")

        injuries = [
            Injury(part_of_body="Ankle", type_of_injury="Break"),
            Injury(part_of_body="Ankle", type_of_injury="Sprain"),
            Injury(part_of_body="Ankle", type_of_injury="Tear"),
            Injury(part_of_body="Ankle", type_of_injury="Dislocation"),
            Injury(part_of_body="Ankle", type_of_injury="Fracture"),

            Injury(part_of_body="Knee", type_of_injury="Break"),
            Injury(part_of_body="Knee", type_of_injury="Sprain"),
            Injury(part_of_body="Knee", type_of_injury="Tear"),
            Injury(part_of_body="Knee", type_of_injury="Dislocation"),
            Injury(part_of_body="Knee", type_of_injury="Fracture"),

            Injury(part_of_body="Hip", type_of_injury="Break"),
            Injury(part_of_body="Hip", type_of_injury="Sprain"),
            Injury(part_of_body="Hip", type_of_injury="Tear"),
            Injury(part_of_body="Hip", type_of_injury="Dislocation"),
            Injury(part_of_body="Hip", type_of_injury="Fracture"),

            Injury(part_of_body="Wrist", type_of_injury="Break"),
            Injury(part_of_body="Wrist", type_of_injury="Sprain"),
            Injury(part_of_body="Wrist", type_of_injury="Tear"),
            Injury(part_of_body="Wrist", type_of_injury="Dislocation"),
            Injury(part_of_body="Wrist", type_of_injury="Fracture"),

            Injury(part_of_body="Elbow", type_of_injury="Break"),
            Injury(part_of_body="Elbow", type_of_injury="Sprain"),
            Injury(part_of_body="Elbow", type_of_injury="Tear"),
            Injury(part_of_body="Elbow", type_of_injury="Dislocation"),
            Injury(part_of_body="Elbow", type_of_injury="Fracture"),

            Injury(part_of_body="Shoulder", type_of_injury="Break"),
            Injury(part_of_body="Shoulder", type_of_injury="Sprain"),
            Injury(part_of_body="Shoulder", type_of_injury="Tear"),
            Injury(part_of_body="Shoulder", type_of_injury="Dislocation"),
            Injury(part_of_body="Shoulder", type_of_injury="Fracture"),   
        ]

        db.session.add_all(injuries)

        print("Seeding strengthenings")
        
        strengthenings= [
            Strengthening(part_of_body="Ankle", movement="Calf Raise", equipment="Body Weight"),
            Strengthening(part_of_body="Ankle", movement="Weighted Calf Raises", equipment="Free Weight"),
            Strengthening(part_of_body="Ankle", movement="Resisted Plantar Flexion", equipment="Band"),
            Strengthening(part_of_body="Ankle", movement="Resisted Single Leg Stands", equipment="Cable"),
            Strengthening(part_of_body="Ankle", movement="Slant Board Calf Raise", equipment="Machine"),

            Strengthening(part_of_body="Knee", movement="Hamstring Curl", equipment="Body Weight"),
            Strengthening(part_of_body="Knee", movement="Step Ups", equipment="Free Weight"),
            Strengthening(part_of_body="Knee", movement="Hamstring Curl", equipment="Band"),
            Strengthening(part_of_body="Knee", movement="Romanian Deadlifts", equipment="Cable"),
            Strengthening(part_of_body="Knee", movement="Leg Press", equipment="Machine"),

            Strengthening(part_of_body="Hip", movement="Knee to Chest", equipment="Body Weight"),
            Strengthening(part_of_body="Hip", movement="Lateral Step Ups", equipment="Free Weight"),
            Strengthening(part_of_body="Hip", movement="Clamshell", equipment="Band"),
            Strengthening(part_of_body="Hip", movement="Hip Adduction", equipment="Cable"),
            Strengthening(part_of_body="Hip", movement="Hip Abduction", equipment="Machine"),

            Strengthening(part_of_body="Wrist", movement="Palm Squeezes", equipment="Body Weight"),
            Strengthening(part_of_body="Wrist", movement="Wrist Curls", equipment="Free Weight"),
            Strengthening(part_of_body="Wrist", movement="Wrist Extension", equipment="Band"),
            Strengthening(part_of_body="Wrist", movement="Wrist Flexion", equipment="Cable"),
            Strengthening(part_of_body="Wrist", movement="Grip Strength Machine", equipment="Machine"),

            Strengthening(part_of_body="Elbow", movement="Bicep Curls", equipment="Body Weight"),
            Strengthening(part_of_body="Elbow", movement="Bicep Curls", equipment="Free Weight"),
            Strengthening(part_of_body="Elbow", movement="Banded Elbow Extensions", equipment="Band"),
            Strengthening(part_of_body="Elbow", movement="Tricep Push Downa", equipment="Cable"),
            Strengthening(part_of_body="Elbow", movement="Assisted Pull Ups", equipment="Machine"),

            Strengthening(part_of_body="Shoulder", movement="External Rotations", equipment="Body Weight"),
            Strengthening(part_of_body="Shoulder", movement="Rear Delt Rows", equipment="Free Weight"),
            Strengthening(part_of_body="Shoulder", movement="Around the Worlds", equipment="Band"),
            Strengthening(part_of_body="Shoulder", movement="External Rotation Step Outs", equipment="Cable"),
            Strengthening(part_of_body="Shoulder", movement="Limited Range of Motion Lat Pull Downs", equipment="Machine"),
        ]


        db.session.add_all(strengthenings)

        print("Seeding Mobilities")

        mobilities = [
            Mobility(part_of_body="Ankle", movement="Ankle Circles", equipment="Body Weight"),
            Mobility(part_of_body="Ankle", movement="Weighted Ankle Circles", equipment="Free Weight"),
            Mobility(part_of_body="Ankle", movement="MWM on Step", equipment="Band"),
            Mobility(part_of_body="Ankle", movement="Ankle Flexion", equipment="Body Weight"),
            Mobility(part_of_body="Ankle", movement="Dumbbell Dorsiflexion", equipment="Free Weight"),

            Mobility(part_of_body="Knee", movement="Elevated Pigeon Rotations", equipment="Body Weight"),
            Mobility(part_of_body="Knee", movement="Weighted Adductor Rock", equipment="Free Weight"),
            Mobility(part_of_body="Knee", movement="Banded Knee Extension", equipment="Band"),
            Mobility(part_of_body="Knee", movement="Ring Squats", equipment="Body Weight"),
            Mobility(part_of_body="Knee", movement="Weighted Deep Squat", equipment="Free Weight"),

            Mobility(part_of_body="Hip", movement="90/90s", equipment="Body Weight"),
            Mobility(part_of_body="Hip", movement="Cossack Squat", equipment="Free Weight"),
            Mobility(part_of_body="Hip", movement="Side Steps", equipment="Band"),
            Mobility(part_of_body="Hip", movement="Hip Flexor Rocks", equipment="Body Weight"),
            Mobility(part_of_body="Hip", movement="Weighted Leg Swings", equipment="Free Weight"),

            Mobility(part_of_body="Wrist", movement="Wrist Cirlces", equipment="Body Weight"),
            Mobility(part_of_body="Wrist", movement="Weight Wrist Circles", equipment="Free Weight"),
            Mobility(part_of_body="Wrist", movement="Radial Deviation", equipment="Band"),
            Mobility(part_of_body="Wrist", movement="Table Wrist Walks", equipment="Body Weight"),
            Mobility(part_of_body="Wrist", movement="Wrist Waves", equipment="Body Weight"),

            Mobility(part_of_body="Elbow", movement="Elbow Exension", equipment="Body Weight"),
            Mobility(part_of_body="Elbow", movement="Elbow Extension With A Dowel", equipment="Free Weight"),
            Mobility(part_of_body="Elbow", movement="Banded Elbow Extension", equipment="Band"),
            Mobility(part_of_body="Elbow", movement="Passive Elbow Flexion", equipment="Body Weight"),
            Mobility(part_of_body="Elbow", movement="All Fours Banded Elbow Extension", equipment="Band"),

            Mobility(part_of_body="Shoulder", movement="Single Arm Windmills", equipment="Body Weight"),
            Mobility(part_of_body="Shoulder", movement="Dumbbell External Rotation", equipment="Free Weight"),
            Mobility(part_of_body="Shoulder", movement="Band Pull Aparts", equipment="Band"),
            Mobility(part_of_body="Shoulder", movement="Pendulums", equipment="Body Weight"),
            Mobility(part_of_body="Shoulder", movement="Weighted Pendulums", equipment="Free Weight"),
        ]

        db.session.add_all(mobilities)

        print("Seeding flexibilities")

        flexibilities = [
            Flexibility(part_of_body="Ankle", movement="Standing Calf Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Ankle", movement="Achilles Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Ankle", movement="Cross Leg Ankle Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Ankle", movement="Ankle Inversion", equipment="Band"),
            Flexibility(part_of_body="Ankle", movement="Ankle Eversion ", equipment="Band"),
            Flexibility(part_of_body="Ankle", movement="Band Stretch", equipment="Band"),

            Flexibility(part_of_body="Knee", movement="Hamstring Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Knee", movement="Quad Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Knee", movement="Couch Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Knee", movement="Resisted Hamstring Strech", equipment="Band"),
            Flexibility(part_of_body="Knee", movement="Resisted Quad Strech", equipment="Band"),
            Flexibility(part_of_body="Knee", movement="Resisted Couch Stretch", equipment="Band"), 

            Flexibility(part_of_body="Hip", movement="IT Band Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Hip", movement="Hip Flexor Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Hip", movement="Side Laying Hip Flexor Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Hip", movement="Resisted Supine Hip Flexor Stretch", equipment="Band"),
            Flexibility(part_of_body="Hip", movement="Resited IT Band Stretch", equipment="Band"),
            Flexibility(part_of_body="Hip", movement="Resisted Hip Flexor Stretch", equipment="Band"),

            Flexibility(part_of_body="Wrist", movement="Prayer Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Wrist", movement="Wrist Flexor Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Wrist", movement="Wrist Extensor Stretchs", equipment="Body Weight"),
            Flexibility(part_of_body="Wrist", movement="Banded Wrist Flexion", equipment="Band"),
            Flexibility(part_of_body="Wrist", movement="Banded Wrist Extension", equipment="Band"),
            Flexibility(part_of_body="Wrist", movement="Banded Wrist Lateral Stretch", equipment="Band"),

            Flexibility(part_of_body="Elbow", movement="Wall Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Elbow", movement="Crossover Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Elbow", movement="Physioball Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Elbow", movement="Between the Back Band Stretch", equipment="Band"),
            Flexibility(part_of_body="Elbow", movement="Bicep Stretch", equipment="Body Weight"),
            Flexibility(part_of_body="Elbow", movement="Tricep Stretch", equipment="Body Weight"),

            Flexibility(part_of_body="Shoulder", movement="Single Arm Adduction", equipment="Body Weight"),
            Flexibility(part_of_body="Shoulder", movement="Assisted Hitchhikers", equipment="Body Weight"),
            Flexibility(part_of_body="Shoulder", movement="Behind the Back Front Delt Strech", equipment="Body Weight"),
            Flexibility(part_of_body="Shoulder", movement="Band Posture", equipment="Band"),
            Flexibility(part_of_body="Shoulder", movement="Band Lat Strech", equipment="Band"),
            Flexibility(part_of_body="Shoulder", movement="Elbow in Band PNF Stretch", equipment="Band"),            
        ]

        db.session.add_all(flexibilities)


        print("Seeding users")
        users = [
            User(user_name="Iskander", password="FinalProject123", injury=injuries[28], strengthening=strengthenings[1], flexibility=flexibilities[3], mobility=mobilities[4]),
            User(user_name="Bridget", password="Tester123",injury=injuries[20], strengthening=strengthenings[2], flexibility=flexibilities[4], mobility=mobilities[5])
        ]

        db.session.add_all(users)

        db.session.commit()


        print("Done Seeding")
        
       

     



