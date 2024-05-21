from django.shortcuts import render

# Create your views here.
def View(request):
    return render(request, 'user/view-user.html')

def Borrow(request):
    return render(request, 'user/borrow-user.html')

def Browse(request):
    return render(request, 'user/browse-user.html')

def Home(request):
    return render(request, 'user/home-user.html')

def Detail(request):
    return render(request, 'user/book-detail.html')