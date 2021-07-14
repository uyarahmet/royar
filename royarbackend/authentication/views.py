from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #TODO: FIND REQUEST FROM INHERITED MODEL.
