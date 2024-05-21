from django.db import models

class Product(models.Model):
    x=[
        ('phone','phone'),
        ('computer','computer'),
    ]
    name = models.CharField(max_length=50)
    content = models.TextField()
    price = models.DecimalField(max_digits=5,decimal_places=2)
    category = models.CharField(max_length=50,null=True,choices=x)
# Create your models here.
