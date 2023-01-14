from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    price = models.FloatField()
    picture = models.TextField(blank=False, null=False)
    active = models.BooleanField()
    date_created = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.name