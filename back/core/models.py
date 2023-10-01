from django.db import models


class Season(models.Model):
    year = models.IntegerField()

    class Meta:
        db_table = "season"


class Round(models.Model):
    number = models.IntegerField() 
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    closed = models.BooleanField(default=False) # Avoid updated after round is closed

    class Meta:
        db_table = "round"


class Match(models.Model):

    SCHEDULED = "Scheduled"
    PLAYING = "Playing"
    FINISHED = "Finished"
    
    home = models.ForeignKey('Team', on_delete=models.CASCADE, related_name="home_matches")
    away = models.ForeignKey('Team', on_delete=models.CASCADE, related_name="away_matches")
    round = models.ForeignKey(Round, on_delete=models.CASCADE, related_name="matches")
    goals_home = models.IntegerField(default=0)
    goals_away = models.IntegerField(default=0)

    date = models.DateTimeField()

    status = models.CharField(max_length=255, default=SCHEDULED)

    class Meta:
        db_table = "match"


class Team(models.Model):
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