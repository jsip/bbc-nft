from flask import Flask

app = Flask(__name__)

@app.route('/')
def base_get():
    return 'BBC data API'