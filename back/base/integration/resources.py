import requests


class Resource:
    headers = {"X-Auth-Token": '7cb43051be1a429b997906d370d5f0bb'}
    base = "http://api.football-data.org/v4"

class Standing(Resource):
    
    resource = '{base}/competitions/{competition}/standings'
    
    @classmethod
    def get(cls, competition='BSA'):
        resource = cls.resource.format(base=super().base, competition=competition)
        headers = super().headers

        response = requests.get(resource, headers=headers)
        return response.json()['standings'][0]['table']

