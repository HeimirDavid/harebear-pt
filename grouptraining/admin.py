from django.contrib import admin
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields
from .models import Grouptraining, GroupCategory

# Register your models here.
class GroupTrainingAdmin(admin.ModelAdmin):
    formfield_overrides = {
        map_fields.AddressField: {'widget': map_widgets.GoogleMapsAddressWidget},
    }


class GroupCategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}


admin.site.register(Grouptraining, GroupTrainingAdmin)

admin.site.register(GroupCategory, GroupCategoryAdmin)