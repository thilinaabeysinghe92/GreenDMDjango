from django import forms

class LoginForm(forms.Forms):
	username = forms.CharField(max_length=120)
	password = forms.CharField(widget = forms.PasswordInput())

		
