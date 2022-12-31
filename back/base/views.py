from rest_framework import viewsets
from rest_framework.response import Response
from .models import Team
from .serializers import TeamSerializer

class StandingView(viewsets.ReadOnlyModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer