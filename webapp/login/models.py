from django.db import models



class User(models.Model):

	def __init__():
	    username = models.CharField(max_length=120)
	    password = models.CharField(max_length=120)
	    position = models.CharField(max_length=100)
	
	def publish(self):
		self.save()

	def __str__(self):
		return self.username