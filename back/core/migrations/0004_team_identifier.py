# Generated by Django 4.1.4 on 2023-10-01 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_match_away_alter_match_home_alter_match_round_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='identifier',
            field=models.IntegerField(null=True),
        ),
    ]
