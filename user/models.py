from django.db import models
from admins.models import Book
# Create your models here.
class Borrow(models.Model):
   # user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    