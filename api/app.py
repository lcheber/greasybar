import json
import sqlite3
import hashlib
from flask import g
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from dbConnect import get_db

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "clef-secrète-à-remplacer"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)

@app.route("/api/signup", methods=["POST"])
def signUp():
    db = get_db()
    try:
        email = request.json.get("email")
        password = request.json.get("password")
        lastName = request.json.get("lastname")
        firstName = request.json.get("firstname")
        pw_hash = hashlib.md5(password.encode(encoding='UTF-8')).hexdigest()
        cursor = db.execute("SELECT email, firstname, lastname FROM users WHERE email=(?)", [email])
        isEmail = cursor.fetchone()
        if isEmail is None or isEmail == '':
            db.execute("INSERT INTO users(email, password, firstname, lastname) VALUES (?, ?, ?, ?)", [email, pw_hash, firstName, lastName])
            db.commit()
            return ({'message':'Account has been created'}
            )
        else:
            return({'message': 'Email already exists !'}
            )
    except:
        return ({'message': "test NOT OK"}
        )


@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        return response


@app.route("/")
def hello_world():
    return {"toto":"tata"}

@app.route("/api/logout", methods=["POST"])
def logout():
    response = jsonify({'message': "logout successful"})
    unset_jwt_cookies(response)
    return response

@app.route('/token', methods=["POST"])
def create_token():
    db = get_db()
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    pw_hash = hashlib.md5(password.encode(encoding='UTF-8')).hexdigest()
    cursor = db.execute("SELECT email, password FROM users WHERE email=(?)", [email])
    logingin = cursor.fetchone()
    if logingin:
        print(logingin[1])
        if pw_hash == logingin[1]:
            print("This email exists and pw is OK")
            access_token = create_access_token(identity=email)
            response = {"access_token":access_token, "message": "You're logged in !"}
            return response
        else:
            print("pw is NOT OK")
            return ("pw is NOT OK")
    else:
        print("This email address doesn't exist")
        return ("This email address doesn't exist")


@app.route('/api/profile')
@jwt_required()
def my_profile():
    email = get_jwt_identity()
    db = get_db()
    cursor = db.execute("SELECT firstname, lastname FROM users WHERE email=(?)", [email])
    info = cursor.fetchone()
    response_body = {
        "firstname": info[0],
        "lastname" :info[1],
        "email" : email
    }
    return response_body



if __name__  == "__main__":
    app.run(debug=True)
