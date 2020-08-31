from django.shortcuts import render
from grouptraining.models import GroupCategory

# Create your views here.
def contact_view(request):
    training_categories = GroupCategory.objects.all()
    if training_categories:
        categories = True
    else:
        categories = False
    
    context = {
        'categories': categories,
        'tc': training_categories,
    }
    return render(request, 'contact.html', context)