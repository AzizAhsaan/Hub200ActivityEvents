from django.contrib import admin
from .models import Events, Event_registration, Contact_us, PeopleReviews, AskaQuestion
from .models import CustomUser

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Events)
admin.site.register(Event_registration) 
admin.site.register(Contact_us)
admin.site.register(PeopleReviews)
admin.site.register(AskaQuestion)
