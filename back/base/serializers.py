
from rest_framework import serializers
from base.models import Team

class TeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Team
        fields = '__all__'    