from django.shortcuts import render
from .models import Product

def product(request):
    return render(request, 'products/product.html')

# Create your views here.
