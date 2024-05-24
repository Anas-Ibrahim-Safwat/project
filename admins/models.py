from django.db import models

# Create your models here.


class Book(models.Model):
    categories = {"Adventure": "Adventure", "Romance": "Romance", "Self Help": "Self Help",
                  "Fantasia": "Fantasia", "Horror":  "Horror", "Historical Fiction": "Historical Fiction"}
    ava = {"Available": "Available", "Borrowed": "Borrowed"}
    b_id = models.CharField(primary_key=True, max_length=50)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    author = models.CharField(max_length=50)
    category = models.CharField(max_length=50, choices=categories)
    image = models.ImageField(upload_to='photos/')
    availability = models.CharField(max_length=12, default="Available", choices=ava)

    def __str__(self):
        return self.name
