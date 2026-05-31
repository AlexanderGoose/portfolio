import requests

def get_breweries(lat, lon):
    url = "https://api.openbrewerydb.org/v1/breweries"

    params = {
        "by_dist": f"{lat},{lon}",
        "per_page": 25
    }

    r = requests.get(url, params=params)
    return r.json()