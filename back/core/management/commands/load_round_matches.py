from django.core.management.base import BaseCommand, CommandError
from core.models import Season, Round, Team, Match
from core.integration.resources import MatchesResource
from datetime import datetime
from django.utils import timezone

class Command(BaseCommand):
    help = "Load initial Rounds/Matches from Season's Competition"

    def clean_database(self):
        Round.objects.all().delete()
        Match.objects.all().delete()

    def convert_to_local_date(self, str_utc_date):
        pattern = "%Y-%m-%dT%H:%M:%SZ" if "Z" in str_utc_date else "%Y-%m-%d %H:%M:%S-03:00"
        local_datetime = datetime.strptime(str_utc_date, pattern)
        return local_datetime.replace(tzinfo=timezone.utc).astimezone(tz=None)

    def handle(self, *args, **options):
        self.clean_database()

        matches_by_round = MatchesResource.get()

        season = Season.objects.last()

        for data in matches_by_round:
            start_date, end_date = None, None
            
            round, created = Round.objects.get_or_create(season=season, number=data["matchday"])
            
            home_team = data["homeTeam"]
            away_team = data["awayTeam"]
            score = data["score"]

            team_home = Team.objects.get(identifier=home_team["id"])
            team_away = Team.objects.get(identifier=away_team["id"])

            statuses = {
                "SCHEDULED": Match.SCHEDULED,
                "IN_PLAY": Match.PLAYING,
                "FINISHED": Match.FINISHED,
                "TIMED": Match.TO_CONFIRM
            }

            status = statuses[data["status"]]
            date = self.convert_to_local_date(data["utcDate"])
            goals_home = score["fullTime"]["home"]
            goals_away = score["fullTime"]["away"]

            insert = {
                "round": round,
                "home": team_home,
                "away": team_away,
                "date": self.convert_to_local_date(str(date)),
                "status": status,
                "goals_home": goals_home,
                "goals_away": goals_away
            }

            Match.objects.create(**insert)
            self.stdout.write(self.style.SUCCESS(f"Matches/Rounds from {round.number} created successfully."))
            
        self.stdout.write(self.style.SUCCESS("Matches/Rounds created successfully"))        
