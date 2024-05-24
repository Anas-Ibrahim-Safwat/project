from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('sign_up/', views.signUp, name='sign_up'),
    path('', views.home, name='home'),
]
