from flask import Flask, render_template
from flask_talisman import Talisman

app = Flask(__name__)
# talisman = Talisman(app) # forces https

@app.route('/')
def home():
    return render_template('home.html', title='Home', body_class='home-body')

@app.route('/projects')
def projects():
    return render_template('projects.html', title='Projects', body_class='project-body')

@app.route('/resume')
def resume():
    return render_template('resume.html', title='Resume', body_class='resume-body')


if __name__ == '__main__': # just added 
    app.run()
    # app.run(ssl_context=('cert.pem', 'key.pem'))