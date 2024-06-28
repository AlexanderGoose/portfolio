from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/projects')
def projects():
    pass

@app.route('/resume')
def resume():
    return render_template('resume.html')