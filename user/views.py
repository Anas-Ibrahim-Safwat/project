from django.shortcuts import render
from admins.models import Book 

# Create your views here.
def View(request):
    return render(request, 'user/view-user.html',{'data': Book.objects.all()})

def Borrow(request):
    return render(request, 'user/borrow-user.html')

def Browse(request):
    return render(request, 'user/browse-user.html')

def Home(request):
    return render(request, 'user/home-user.html')

def Detail(request):
    return render(request, 'user/book-detail.html')