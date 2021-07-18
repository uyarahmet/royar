from rest_framework import viewsets
from .models import Listing
from .serializers import ListingSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator



class ListingViewSet(viewsets.ModelViewSet):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
