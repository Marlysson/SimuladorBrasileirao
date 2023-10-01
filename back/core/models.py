from django.db import models


class Season(models.Model):
    year = models.IntegerField()

    class Meta:
        db_table = "season"


class Round(models.Model):
    number = models.IntegerField() 
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    closed = models.BooleanField(default=False) # Avoid updated after round is closed
    first_match = models.DateTimeField(null=True)
    last_match = models.DateTimeField(null=True)

    class Meta:
        db_table = "round"


class Match(models.Model):

    SCHEDULED = "SCHEDULED"
    PLAYING = "PLAYING"
    FINISHED = "FINISHED"

    home = models.ForeignKey('Team', on_delete=models.CASCADE, related_name="home_matches")
    away = models.ForeignKey('Team', on_delete=models.CASCADE, related_name="away_matches")
    round = models.ForeignKey(Round, on_delete=models.CASCADE, related_name="matches")
    goals_home = models.IntegerField(null=True)
    goals_away = models.IntegerField(null=True)

    date = models.DateTimeField()

    status = models.CharField(max_length=255, default=SCHEDULED)

    class Meta:
        db_table = "match"


class Team(models.Model):
    
    identifier = models.IntegerField(null=True)
    name = models.CharField(max_length=255)
    image = models.URLField()
    position = models.IntegerField()
    
    points = models.IntegerField()

    games = models.IntegerField()
    victories = models.IntegerField()
    
    goal_pro = models.IntegerField()
    balance_goals = models.IntegerField()
    
    class Meta:
        ordering = ['position']
        db_table = "team"