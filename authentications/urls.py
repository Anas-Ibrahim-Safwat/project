from django.urls import path
from . import views

urlpatterns = [
    path('login/' , views.Login, name = 'login'),
    path('sign_up/' , views.SignUp, name = 'sign_up'),
    path('' , views.Home, name = 'home'),
]