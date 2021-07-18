from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('type', 'area', 'price', 'image', 'view', 'lat_coord', 'lng_coord', 'bedrooms', 'livingrooms')
