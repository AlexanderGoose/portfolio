##################################################
# This file interacts with openweathermap api    #
# used to display current weather conditions     #
# in Denver. Used an API key hidden from others. #
##################################################

from datetime import datetime
import requests
import os
import pytz

BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
API_KEY = open('api_key.txt', 'r').read().strip()
# API_KEY = os.getenv('API_KEY')
CITY = 'Lakewood'

def kelvin_to_far(kelvin):
    celsius = kelvin - 273.15
    farenheit = celsius * (9/5) + 32
    return farenheit

# Because the verbage the API uses isn't good
# I have hard coded in replacements
# https://openweathermap.org/weather-conditions
def conditions_convert(conditions):
    new_names = {
        'clear sky': 'sunny',
        'few clouds': 'mostly sunny',
        'scattered clouds': 'partly cloudy',
        'broken clouds': 'cloudy',
        'overcast clouds': 'cloudy',
        'shower rain': 'lightly raining',
        'rain': 'raining',
        'thunderstorm': 'thunderstorming',
        'snow': 'snowing',
        'mist': 'misty',
        'smoke': 'smoky outside',
        'haze': 'hazy',
    }

    new_condition_name = None

    if 'thunderstorm' in conditions:
        new_condition_name = 'thunderstorming'
    elif 'drizzle' in conditions:
        new_condition_name = 'drizzling'
    elif 'rain' in conditions:
        new_condition_name = 'raining'
    elif 'snow' and 'rain' in conditions:
        new_condition_name = 'experiencing a wintery mix'
    elif 'snow' in conditions:
        new_condition_name = 'snowing'

    # if none of the general terms are found, check the
    # specific list and loop through until condition found
    else:
        for key, value in new_names.items():
            if conditions in key:
                new_condition_name = value
                break

    if new_condition_name != None:
        return new_condition_name
    # if donesn't work, return whatever the api returned (shouldn't happen)
    else:
        return conditions


def time_convert(local_time):
    local_time_formatted = local_time.strftime('%H:%M')
    hour = int(local_time_formatted[:2])

    if hour == 0: # catch midnight
        return f"12{local_time_formatted[2:]} AM"
    elif 1 <= hour < 12:
        return f"{hour}{local_time_formatted[2:]} AM"
    elif hour == 12:
        return f"{local_time_formatted} PM"
    else:
        return f"{hour - 12}{local_time_formatted[2:]} PM"
    

url = BASE_URL + 'appid=' + API_KEY + '&q=' + CITY

response = requests.get(url).json()

# function that grabs info for app.py
def get_weather_and_time():
    temp_kelvin = response['main']['temp']
    temp_far = round(kelvin_to_far(temp_kelvin), 1)

    feels_like_kelvin = response['main']['feels_like']
    temp_feels_far = int(kelvin_to_far(feels_like_kelvin))

    conditions = response['weather'][0]['description']
    new_condition = conditions_convert(conditions)

    utc_time = datetime.utcnow()
    local_timezone = pytz.timezone('America/Denver')

    local_time = utc_time.replace(tzinfo=pytz.utc).astimezone(local_timezone)
    local_time_formatted = time_convert(local_time)

    icon_code = response['weather'][0]['icon']
    icon_url = f"http://openweathermap.org/img/wn/{icon_code}.png"


    return {
        'temp': temp_far,
        'feels_like': temp_feels_far,
        'conditions': new_condition,
        'local_time': local_time_formatted,
        'icon_url': icon_url
    }
