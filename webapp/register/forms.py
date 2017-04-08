from django import forms

class RegisterForm(forms.Forms):
	username = forms.CharField(max_length=120)
	password = forms.CharField(widget = forms.PasswordInput())
	possition = forms.CharField(max_length=120)

	