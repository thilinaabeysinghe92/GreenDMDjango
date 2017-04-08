from django.db import models

# Create your models here.
class FileDB(models.Model):	
	file = models.FileField(upload_to = 'uploadfiles')


