import requests


class Resource:
    headers = {"X-Auth-Token": '7cb43051be1a429b997906d370d5f0bb'}
    base = "http://api.football-data.org/v4/competitions/{competition}/{resource}"
    competition_id = 2013 # BRASILEIRÃO SÉRIE A

    @classmethod
    def request(cls, resource, **parameters):

        parameters.update(
            {
                "competition": cls.competition_id,
                "resource": resource
            }
        )
        
        endpoint = cls.base.format(**parameters)
        endpoint = endpoint.format(**parameters)
        
        return requests.get(endpoint, headers=cls.headers)
      

class Standing(Resource):    
    resource = "standings"
    
    @classmethod
    def get(cls):
        parameters = {"competition": cls.competition}
        response = cls.request(cls.resource, **parameters)        
        return response.json()['standings'][0]['table']


class TeamResource(Resource):    
    resource = "teams?season={year}"

    @classmethod
    def get(cls):
        from datetime import date
        
        parameters = {
            "year": date.today().year
        }

        response = cls.request(cls.resource, **parameters)
        return response.json()["teams"]
    

class MatchesResource(Resource):
    resource = "matches?season={season}"

    @classmethod
    def get(cls):
        from datetime import date
        parameters = {
            "season": date.today().year
        }

        response = cls.request(cls.resource, **parameters)
        return response.json()["matches"]