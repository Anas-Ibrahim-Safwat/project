import os
from django.shortcuts import get_object_or_404
from django.shortcuts import render, redirect
from . models import Book
from django.contrib import messages
# Create your views here.


def home(request):
    return render(request, 'admins/home-admin.html')


def add_new_book(request):
    if request.method == "POST":
        book = Book()
        book.b_id = request.POST.get("bid")
        nee = book.b_id
        book.name = request.POST.get("name")
        book.description = request.POST.get("book_description")
        book.author = request.POST.get("author")
        book.category = request.POST.get("book category")
        if len(request.FILES) != 0:
            book.image = request.FILES['image']
        if Book.objects.filter(b_id=nee).exists():
            messages.warning(request, 'ID is already exists')
            return redirect('add')
        else:
            book.save()
            messages.success(request, 'Book has been added successfully')
    return render(request, 'admins/add-admin.html')


# def get_book(request, book_id):
#     book = get_object_or_404(Book, id=book_id)
#     return render(request, 'delete-admin.html', {'book': book})


def delete(request):
    return render(request, 'admins/delete-admin.html', {'data': Book.objects.all()})


def go_edit(request, pk):
    book = Book.objects.get(b_id=pk)
    if request.method == "POST":
        if len(request.FILES) != 0:
            if len(book.image) > 0:
                os.remove(book.image.path)
            book.image = request.FILES['image']
        book.name = request.POST.get("name")
        book.description = request.POST.get("book_description")
        book.author = request.POST.get("author")
        book.category = request.POST.get("book category")
        book.availability = request.POST.get("Book Availability")
        book.save()
        return redirect('admins/')
    return render(request, 'admins/go-edit-admin.html', {'data': book})


def view(request):

    return render(request, 'admins/view-admin.html', {'data': Book.objects.all()})
