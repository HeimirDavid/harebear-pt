from django.urls import path
from .views import grouptraining_view, category_view

urlpatterns = [
    path('', grouptraining_view, name='grouptraining_view'),
    path('<str:pk>', category_view, name='category_view')
]