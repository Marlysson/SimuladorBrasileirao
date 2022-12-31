from .resources import Standing

class FootballApi:

    @classmethod
    def standing(cls):
        return Standing.get()