from django.shortcuts import render
from .models import Grouptraining
from ptsite.settings import GOOGLE_MAPS_API_KEY

# Create your views here.
def grouptraining_view(request):
    events = Grouptraining.objects.all()
    context = {'events': events,
                'key': GOOGLE_MAPS_API_KEY,
              }
    
    return render(request, 'grouptraining.html', context)