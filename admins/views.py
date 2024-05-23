import os

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
            print("elhamd llah")
            book.image = request.FILES['image']
        book.save()
    return render(request, 'admins/add-admin.html')


def delete(request):
    return render(request, 'admins/delete-admin.html')


def go_edit(request, pk):
    book = Book.objects.get(id=pk)
    if request.method == "Post":
        if len(request.FILES) != 0:
            if len(book.image) > 0:
                os.remove(book.image.path)
            book.image = request.FILES['image']
            book.name = request.POST.get("name")
            book.description = request.POST.get("book_description")
            book.author = request.POST.get("author")
            book.category = request.POST.get("book category")
            book.save()
    return render(request, 'admins/go-edit-admin.html')


def edit(request):

    return render(request, 'admins/edit-admin.html', {'data': Book.objects.all()})


def view(request):

    return render(request, 'admins/view-admin.html', {'data': Book.objects.all()})
