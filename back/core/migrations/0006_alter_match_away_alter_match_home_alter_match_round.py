# Generated by Django 4.1.4 on 2023-10-01 16:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_round_first_match_round_last_match_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='away',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='away_matches', to='core.team'),
        ),
        migrations.AlterField(
            model_name='match',
            name='home',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='home_matches', to='core.team'),
        ),
        migrations.AlterField(
            model_name='match',
            name='round',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='matches', to='core.round'),
        ),
    ]