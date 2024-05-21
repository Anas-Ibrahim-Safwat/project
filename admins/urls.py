from django.urls import path
from . import views

urlpatterns = [
    path('' , views.Home, name = 'home'),
    path('add/' , views.Add, name = 'add'),
    path('edit/' , views.Edit, name = 'edit'),
    path('delete/' , views.Delete, name = 'delete'),
    path('view/', views.View , name= 'view' )
]