import requests
import json

# Retrieves
# 1: User location data
# 2. Breweries near the user
# Passed to brewery.html to show the user breweries near them

def get_breweries():
    r_loc = requests.get("https://ipinfo.io/json")

    loc_data = r_loc.json()
    lat, lon = loc_data["loc"].split(",")

    params = {
        "by_dist" : f"{lat},{lon}"
    }

    url = "https://api.openbrewerydb.org/v1/breweries"

    r = requests.get(url, params=params)
    data = r.json()

    # with open("breweries.json", "w") as f:
    #     json.dump(data, f, indent=4)

    # print(json.dumps(data, indent=4))

    # We want to return the name, coords, and link to the website
    # Add a marker to the map using the coords 
    # attach a popup to the specific marker w/ the brewery name and link to website
    # maybe even have a get directions sort of thing that will use the street address to 
    # open google maps and start a route

    return data 

get_breweries();