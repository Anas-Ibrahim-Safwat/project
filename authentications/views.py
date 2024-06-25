from django.shortcuts import render, redirect
from django.http import JsonResponse
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


def SignUp(request):
    if request.method == 'POST':
        username=request.POST.get('username')
        password=request.POST.get('pass')
        password1=request.POST.get('pass1')
        email=request.POST.get('email')
        isadmin=request.POST.get('_as')
        if isadmin == 'on':
                isadmin = True
        else:
                isadmin = False
        z =Users (username=username, password=password, cpass=password1, email=email, is_admin=isadmin)
        z.save()
        return redirect('/login')
    return render(request, 'authentications/sign_up.html')


def home(request):
    return render(request, 'authentications/homeWithNav.html')
def check_user_exists(request):
    email =request.GET.get('email')
    check =Users.objects.filter(email=email)
    if len(check)==0:
        return JsonResponse({'status':0,'message':'Not Exist'})
    else:
        return JsonResponse({'status':1,'message':'Exist'})
def check_pass(request):
    pass1 =request.GET.get('pass')
    cpass1 =request.GET.get('pass1')
    if pass1==cpass1:
        return JsonResponse({'status':0,'message':'Confirm pass and pass is same'})
    else:
        return JsonResponse({'status':1,'message':'Confirm pasword do not match password'})