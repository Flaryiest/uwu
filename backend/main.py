from flask import Flask, jsonify, request
from postgrelib import SimpleTable, Database

database = Database()
table = SimpleTable("main", database, "username", "data")

app = Flask(__name__)

@app.rooute("/login", methods=["POST"])
def login():
    if request.cookies.get("token") == "skibidi":
        return jsonify({"result": True, "info": "Your super sigma frontend works!"}) 
    return jsonify({"result": False, "info": "Not ohio skbidi, cookies set sucessfully"}).set_cookie("token", "skibidi")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)