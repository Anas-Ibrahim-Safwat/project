from django.shortcuts import render

# Create your views here.

def Home(request):
    return render(request, 'admins/home-admin.html')

def Add(request):
    return render(request, 'admins/add-admin.html')

def Delete(request):
    return render(request, 'admins/delete-admin.html')

def Edit(request):
    return render(request, 'admins/edit-admin.html')

def View(request):
    return render(request,'admins/view-admin.html' )


