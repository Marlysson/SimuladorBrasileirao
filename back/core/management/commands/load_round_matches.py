from django.db.models import Max, Min
from django.core.management.base import BaseCommand, CommandError
from django.utils import timezone

from core.models import Season, Round, Team, Match
from core.integration.resources import MatchesResource

from datetime import datetime

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
            self.stdout.write(self.style.SUCCESS(f"Matches from {round.number}º round created successfully."))

        for round in Round.objects.all():
            aggregation = Match.objects.filter(round__number=round.number).aggregate(first_match=Min("date"), last_match=Max("date"))

            round.first_match = aggregation["first_match"]
            round.last_match  = aggregation["last_match"]

            if datetime.today().date() > round.last_match.date():
                round.closed = True
                
            round.save()

        self.stdout.write(self.style.SUCCESS("Matches/Rounds created successfully"))        
