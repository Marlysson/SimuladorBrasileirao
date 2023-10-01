import requests


class Resource:
    headers = {"X-Auth-Token": '7cb43051be1a429b997906d370d5f0bb'}
    base = "http://api.football-data.org/v4/competitions/{competition}/{resource}"
    competition_id = 2013 # BRASILEIRÃO SÉRIE A

    @classmethod
    def request(cls, resource):
        from datetime import date
        
        parameters = {
            "competition": cls.competition_id,
            "resource": resource,
            "season": date.today().year
        }
        
        endpoint = cls.base.format(**parameters)
        endpoint = endpoint.format(**parameters)
        
        return requests.get(endpoint, headers=cls.headers)
      

class StandingResource(Resource):    
    resource = "standings?season={season}"
    
    @classmethod
    def get(cls):
        response = cls.request(cls.resource)        
        return response.json()['standings'][0]['table']


class TeamResource(Resource):    
    resource = "teams?season={season}"

    @classmethod
    def get(cls):
        response = cls.request(cls.resource)
        return response.json()["teams"]
    

class MatchesResource(Resource):
    resource = "matches?season={season}"

    @classmethod
    def get(cls):
        response = cls.request(cls.resource)
        return response.json()["matches"]