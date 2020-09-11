from django.urls import path
from .views import grouptraining_view, category_view, add_event

urlpatterns = [
    path('', grouptraining_view, name='grouptraining_view'),
    path('<str:slug>', category_view, name='category_view'),
]