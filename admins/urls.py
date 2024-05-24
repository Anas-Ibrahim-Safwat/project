from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add/', views.add_new_book, name='add'),
    path('delete/', views.delete, name='delete'),
    path('view/', views.view, name='view'),
    path('editing/<str:pk>', views.go_edit, name='editing')
]
