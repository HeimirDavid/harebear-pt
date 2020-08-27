from django.db import models
from django_google_maps import fields as map_fields

# Create your models here.
class GroupCategory(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name


class Grouptraining(models.Model):
    name = models.CharField(max_length=200)
    subheader = models.CharField(null=True, blank=True, max_length=300)
    description = models.TextField()
    date = models.CharField(null=True, blank=True, max_length=200)
    price = models.IntegerField()
    address = map_fields.AddressField(max_length=200)
    geolocation = map_fields.GeoLocationField(max_length=100)
    category = models.ForeignKey(GroupCategory, null=True, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.name
