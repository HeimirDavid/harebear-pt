from django.urls import path
from .views import grouptraining_view

urlpatterns = [
    path('', grouptraining_view, name='grouptraining_view')
]