from django.shortcuts import render

# Create your views here.

def register(request):
	if request.method == "POST":
		username = request.POST.get('username', '')
		password = request.POST.get('password', '')
		possition = request.POST.get('possition', '')
	else:
		render(request, 'register.html', {})
