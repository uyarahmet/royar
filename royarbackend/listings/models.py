from django.db import models

'''
class listing(models.Model):
    type = models.CharField(max_length=5) # rent, sell
    area = models.IntegerField() # 120m2
    price = models.FloatField()
    view = models.CharField(max_length=20) # street, bospohorus, forest, sea, lake, landscape,other
    lat_coord = models.FloatField()
    lng_coord = models.FloatField()
    bedrooms = models.IntegerField()
    livingrooms = models.IntegerField()

'''

class Listing(models.Model):
    type = models.CharField(max_length=20, default=None) # rent, sell
    area = models.IntegerField(default=None) # 120m2
    price = models.FloatField(default=None)
    image = models.ImageField(upload_to='blog/%Y/%m/%d')
    view = models.CharField(max_length=20, default=None) # street, bospohorus, forest, sea, lake, landscape,other
    lat_coord = models.FloatField(default=None)
    lng_coord = models.FloatField(default=None)
    bedrooms = models.IntegerField( default=None)
    livingrooms = models.IntegerField( default=None)
