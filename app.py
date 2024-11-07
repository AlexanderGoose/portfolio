from flask import Flask, render_template
from flask_talisman import Talisman
import weather

app = Flask(__name__)
# talisman = Talisman(app) # forces https

@app.route('/')
def home():
    return render_template('home.html', title='Home')

@app.route('/projects')
def projects():
    return render_template('projects.html', title='Projects')

@app.route('/resume')
def resume():
    return render_template('resume.html', title='Resume')

@app.route('/about')
def about():
    weather_data = weather.get_weather_and_time()

    return render_template('about.html',
                           temp=weather_data['temp'],
                           feels_like=weather_data['feels_like'],
                           conditions=weather_data['conditions'],
                           time=weather_data['local_time'],
                           icon=weather_data['icon_url'])

@app.route('/project3112')
def project3112():
    return render_template('project_3112.html')

@app.route('/proposal')
def proposal():
    return render_template('proposal.html')

if __name__ == '__main__': # just added 
    app.run()
    # app.run(ssl_context=('cert.pem', 'key.pem'))