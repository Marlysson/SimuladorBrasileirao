# Generated by Django 4.1.4 on 2022-12-31 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.URLField()),
                ('position', models.IntegerField()),
                ('points', models.IntegerField()),
                ('games', models.IntegerField()),
                ('victories', models.IntegerField()),
                ('goal_pro', models.IntegerField()),
                ('balance_goals', models.IntegerField()),
            ],
        ),
    ]
