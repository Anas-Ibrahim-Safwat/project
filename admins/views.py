from django.shortcuts import render
from . models import Book
# Create your views here.


def home(request):
    return render(request, 'admins/home-admin.html')


def add_new_book(request):
    if request.method == "POST":
        book = Book()
        book.b_id = request.POST.get("bid")
        book.name = request.POST.get("name")
        book.description = request.POST.get("book_description")
        book.author = request.POST.get("author")
        book.category = request.POST.get("book category")
        if len(request.FILES) != 0:
            print("elhamdllah")
            book.image = request.FILES['image']
        book.save()
    return render(request, 'admins/add-admin.html')


def delete(request):
    return render(request, 'admins/delete-admin.html')


def edit(request):
    return render(request, 'admins/edit-admin.html')


def view(request):

    return render(request, 'admins/view-admin.html', {'data': Book.objects.all()})
