from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import ListingViewSet

router = routers.DefaultRouter()
router.register('query', ListingViewSet)

urlpatterns = [
    path('', include(router.urls))
]
