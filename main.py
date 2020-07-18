#! Python3


from flask import Flask, render_template


app = Flask(__name__, static_folder='static', template_folder='templates')
@app.route("/")

def home():
    return render_template("CMDAC.html")


app.run(debug=True)

if (__name__ == "__main__"):
    home()

