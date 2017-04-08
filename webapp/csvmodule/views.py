from django.shortcuts import render

# Create your views here.

from .forms import UploadFileForm
from .models import FileDB

def SaveFile(request):
   
   
   if request.method == "POST":
      #Get the posted form
      filename = request.POST.get('csvfile')
      MyFileDB = FileDB(file=filename)
      MyFileDB.save()
     
   else:
      MyUploadFileForm = UploadFileForm()
		
   return render(request, 'csv.html', {} )