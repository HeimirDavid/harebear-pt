from django.shortcuts import render
from django.utils import timezone
from .models import Grouptraining, GroupCategory
from ptsite.settings import GOOGLE_MAPS_API_KEY, STATIC_URL

# Create your views here.
def grouptraining_view(request):
    training_categories = GroupCategory.objects.all()
    if training_categories:
        categories = True
    else:
        categories = False
    events = Grouptraining.objects.filter(upload_date__lte=timezone.now
                ()).order_by('-upload_date')
    context = {'events': events,
                'key': GOOGLE_MAPS_API_KEY,
                'static_url': STATIC_URL,
                'categories': categories,
                'tc': training_categories,
              }
    
    return render(request, 'grouptraining.html', context)


def category_view(request, slug):
    training_categories = GroupCategory.objects.all()
    if training_categories:
        categories = True
    else:
        categories = False
    category = GroupCategory.objects.get(slug=slug)
    events = category.grouptraining_set.filter(upload_date__lte=timezone.now
                ()).order_by('-upload_date')
    
    
    context = {'events': events,
                'key': GOOGLE_MAPS_API_KEY,
                'categories': categories,
                'tc': training_categories,
              }
    return render(request, 'grouptraining.html', context)

