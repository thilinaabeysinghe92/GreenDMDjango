from django.db import models

# Create your models here.
class UserDB(models.Model):	
	username = models.CharField(max_length=120)
	password = models.CharField(max_length=120)
	position = models.CharField(max_length=100)
