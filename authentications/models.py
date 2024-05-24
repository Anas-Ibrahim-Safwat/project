from django.db import models

# Create your models here.


class Users(models.Model):
    username = models.CharField(max_length=50)
    email = models.CharField(primary_key=True, max_length=50)
    password = models.CharField(max_length=50)
    cpass = models.CharField(max_length=50)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.username
