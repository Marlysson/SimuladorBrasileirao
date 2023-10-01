import requests


class Resource:
    headers = {"X-Auth-Token": '7cb43051be1a429b997906d370d5f0bb'}
    base = "http://api.football-data.org/v4"
    
    @classmethod
    def request(cls, resource, **parameters):
        endpoint = resource.format(base=cls.base, **parameters)
        return requests.get(endpoint, headers=cls.headers)
      

class Standing(Resource):
    competition = 'BSA'
    resource = "{base}/competitions/{competition}/standings"
    
    @classmethod
    def get(cls):
        parameters = {"competition": cls.competition}
        response = cls.request(cls.resource, **parameters)        
        return response.json()['standings'][0]['table']


class TeamResource(Resource):
    competition_id = 2013
    resource = "{base}/competitions/{competition_id}/teams?season={year}"

    @classmethod
    def get(cls):
        from datetime import date

        parameters = {
            "competition_id": cls.competition_id, 
            "year": date.today().year
        }

        response = cls.request(cls.resource, **parameters)
        return response.json()["teams"]
    