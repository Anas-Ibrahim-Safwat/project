from django.urls import path
from . import views

urlpatterns = [
    path('login/' , views.login, name = 'login'),
    path('sign_up/' , views.SignUp, name = 'sign_up'),
    path('' , views.home, name = 'home'),
    path('check_user_exists/' , views.check_user_exists, name = 'check_user_exists'),
    path('checkpass/' , views.check_pass, name = 'check_pass'),
]