<<<<<<< HEAD
from django.shortcuts import render
from admins.models import Book 

=======
from django.shortcuts import render,get_object_or_404
from admins.models import Book
>>>>>>> b7356270e5c49b727c2b8cc9b6e9d8755a5e87bb
# Create your views here.


def Search(request):
    if request.method == "POST":
        searched = request.POST['searched']
        books = Book.objects.filter(name__contains = searched)
        return render(request, 'user/search-book.html', {'searched':searched , 'books':books})
    else:
        return render(request, 'user/search-book.html')

def View(request):
    return render(request, 'user/view-user.html',{'data': Book.objects.all()})

def Borrow(request):
    return render(request, 'user/borrow-user.html')

def Browse(request):
    return render(request, 'user/browse-user.html',{'data':Book.objects.all()})
    #return render(request, 'user/browse-user.html')

def Home(request):
    return render(request, 'user/home-user.html')

def Detail(request,pk):
     book = get_object_or_404(Book, b_id=pk)
     return render(request, 'user/book-detail.html', {'datum': book})
    #return render(request, 'user/book-detail.html')