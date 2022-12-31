from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StandingView

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'standing', StandingView ,basename="standing")

urlpatterns = [
    path('', include(router.urls)),
]