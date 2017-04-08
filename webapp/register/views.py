from django.shortcuts import render
from . import forms
from .models import UserDB
# Create your views here.

def register(request):
	if request.method == "POST":
		username = request.POST.get('username', '')
		password = request.POST.get('password', '')
		possition = request.POST.get('position', '')
		
		if username != None or password != None or possition != None:
			form_obj = UserDB(username=username, password=password, position=possition)
			form_obj.save()

		return render(request, 'register.html', {})
	else:
		return render(request, 'register.html', {})

	
