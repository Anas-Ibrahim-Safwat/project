from django.shortcuts import render
from . models import Book
# Create your views here.


def Home(request):
    return render(request, 'admins/home-admin.html')


def add_new_book(request):
    if request.method == "POST":
        b_id = request.POST.get("id")
        name = request.POST.get("name")
        description = request.POST.get("description")
        author = request.POST.get("author")
        category = request.POST.get("category")
        image = request.POST.get("image")
        data = Book(name=name, b_id=b_id, description=description, author=author, category=category, image=image)
        data.save()
    return render(request, 'admins/add-admin.html')


def Delete(request):
    return render(request, 'admins/delete-admin.html')


def Edit(request):
    return render(request, 'admins/edit-admin.html')


def View(request):
    return render(request, 'admins/view-admin.html')
