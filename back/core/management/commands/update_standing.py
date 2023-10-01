from django.core.management.base import BaseCommand, CommandError
from core.integration.resources import StandingResource
from core.models import Team

class Command(BaseCommand):
    help = "Update current season's standing"

    def handle(self, *args, **options):
        
        standing = StandingResource.get()

        for position in standing:
            
            team = Team.objects.get(identifier=position["team"]["id"])

            team.position = position['position']
            team.name = position['team']['name']
            team.image = position['team']['crest']
            team.points = position['points']
            team.games = position['playedGames']
            team.victories = position['won']
            team.goal_pro = position['goalsFor']
            team.balance_goals = position['goalDifference']

            team.save()

        self.stdout.write(self.style.SUCCESS("Standing update successfully"))