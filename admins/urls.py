from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add/', views.add_new_book, name='add'),
    path('edit/', views.edit, name='edit'),
    path('delete/', views.delete, name='delete'),
    path('view/', views.view, name='view'),
    path('edit/editing', views.go_edit, name='go_edit')
]
