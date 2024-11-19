from flask import Flask
from postgrelib import SimpleTable, Database

database = Database()
table = SimpleTable("main", database, "username", "data")

app = Flask(__name__)

@app.rooute("/login", methods=["POST"])
def login():
    pass

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=80)