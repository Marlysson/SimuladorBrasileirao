from django.core.management.base import BaseCommand, CommandError
from core.models import Team
from core.integration.football_api import FootballApi
from core.integration.resources import TeamResource

class Command(BaseCommand):
    help = "Load initial Teams from Season's Competition"

    def clean_name(self, team):
        removes = ["FBPA", "FC", "EC", "FR", "FBC", "CR", "CA", "SE", "SC", "Paulista"]
        name = team["name"]

        for remove in removes:
            name = name.replace(remove, "")
        name = name.strip()

        if name == "Mineiro":
            name = "Atlético-MG"
        elif name == "Paranaense":
            name = "Athletico-PR"
        elif name == "América":
            name = "América-MG"
        
        return name


    def clean_logo(self, team):
        return team["crest"].replace("_large","")


    def handle(self, *args, **options):

        Team.objects.all().delete()        

        for team in TeamResource.get():
        
            fields = {
                "identifier": team["id"],
                "name": self.clean_name(team),
                "image": self.clean_logo(team),
                "position": 0,
                "points": 0,
                "games": 0,
                "victories": 0,
                "goal_pro": 0,
                "balance_goals": 0,
            }

            Team.objects.create(**fields)

        self.stdout.write(self.style.SUCCESS("Teams created successfully"))        