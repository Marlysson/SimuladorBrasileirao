from django.db import models

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