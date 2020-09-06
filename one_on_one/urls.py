from django.urls import path
from .views import oneOnOne_view

urlpatterns = [
    path('', oneOnOne_view, name='oneOnOne_view'),
]