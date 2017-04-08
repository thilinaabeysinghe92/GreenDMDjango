from django.shortcuts import render
from . import LoginForm
# Create your views here.
class login(request):

	if request.method == "POST":
		LoginDetails = LoginForm(request.POST)
		if LoginDetails.is_valid():
			username = LoginDetails.cleaned_data['username']
			password = LoginDetails.cleaned_data['password']
		else:
			LoginDetails = LoginForm()
	return render(request, 'login.html', {})		
