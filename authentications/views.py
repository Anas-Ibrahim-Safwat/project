from django.shortcuts import render, redirect
from .models import Users
# Create your views here.


def login(request):
    if request.method == "POST":
        password = request.POST.get("pass")
        email = request.POST.get("user")
        if Users.objects.filter(email=email, password=password, is_admin=True).exists():
            return redirect('/admins/add')
        elif Users.objects.filter(email=email, password=password, is_admin=False).exists():
            return redirect('/user')
        else:
            return render(request, 'authentications/login.html', {'watch': "Wrong password or email!"})
    return render(request, 'authentications/login.html')


def signUp(request):
    if request.method == "POST":
        password = request.POST.get("pass")
        cpass = request.POST.get("cpass")
        if password != cpass:
            return render(request, 'authentications/sign_up.html',
                          {'whatchpass': "Confirm Passwords do not match Password!"})
        username = request.POST.get("uname")
        if Users.objects.filter(username=username).exists():
            return render(request, 'authentications/sign_up.html',
                          {'whatchname': "Choose another username to be unique"})
        email = request.POST.get("em")
        if Users.objects.filter(email=email).exists():
            return render(request, 'authentications/sign_up.html',
                          {'whatche': "This email is already exist"})
        is_admin = request.POST.get("-as")
        if is_admin is None:
            is_admin = False
        u = Users(username=username, password=password, cpass=cpass, email=email,
                  is_admin=is_admin)
        u.save()
        return render(request, 'authentications/login.html')
    return render(request, 'authentications/sign_up.html')


def home(request):
    return render(request, 'authentications/homeWithNav.html')
