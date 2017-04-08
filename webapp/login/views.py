from django.shortcuts import render

# Create your views here.
def login(request):
	if request.method == "POST":
			username = request.POST.get('username', '')
			password = request.POST.get('password', '')
	else:
		status = "Please try again "
		return render(request, 'login.html', {'status':status})		

	return render(request, 'login.html', {})		