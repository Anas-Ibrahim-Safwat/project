from django.shortcuts import render

# Create your views here.


def Login(request):
    return render(request, 'authentications/login.html')

def SignUp(request):
    return render(request, 'authentications/sign_up.html')

def Home(request):
    return render(request, 'authentications/homeWithNav.html')