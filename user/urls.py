from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home, name='home'),
    path('borrow/', views.Borrow, name='borrow'),
    path('browse/', views.Browse, name='browse'),
    path('detail/<str:pk>', views.Detail, name='detail'),
    path('view/', views.View, name='viewing'),
    path('search/', views.Search, name='search')

]
