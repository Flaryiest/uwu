from flask import Flask, jsonify, request

app = Flask(__name__)

@app.rooute("/login", methods=["POST"])
def login():
    if request.cookies.get("token") == "skibidi":
        return jsonify({"result": True, "info": "Your super sigma frontend works!"}) 
    else:
        r = jsonify({"result": False, "info": "Not ohio skbidi, cookies set sucessfully"})
        r.set_cookie("token", "skibidi")
        return r

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)