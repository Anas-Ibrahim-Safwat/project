from django.db import models

# Create your models here.


class Book(models.Model):
    b_id = models.CharField(primary_key=True, max_length=50)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    author = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    image = models.ImageField(upload_to='photos/')
    availability = models.BooleanField(default=True)

    def __str__(self):
        return self.name
