from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.contrib.auth.models import AbstractUser

# Create your models here.

# class User(models.Model):
#     username = models.CharField(max_length=50)
#     first_name = models.CharField(max_length=50, null=True , blank=True )
#     last_name = models.CharField(max_length=50, null=True , blank=True)
#     email = models.CharField(max_length=50)
#     phone_number = models.CharField(max_length=50)
#     #we might not need an image field for the user
#     image = models.ImageField(upload_to='images/',null=True)
#     password = models.CharField(max_length=50)
#     # attending = models
#     def __str__(self):
#         return f"{self.username}"

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=50, blank=True)
    photo = models.ImageField(upload_to='images/', null=True, default="Unknownperson.jpg")

class Events(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    event_date = models.DateField(default=timezone.now().date(),null=True)
    location = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images/',null=True)
    status = models.BooleanField( default=True)
    # creator = models.ForeignKey(User, on_delete=models.CASCADE)
    # atendees = models.ManyToManyField(User, related_name="event_atendees", blank=True)
    def __str__(self):
        return f"{self.title}"

class Event_registration(models.Model):
    event = models.ForeignKey(Events,on_delete=models.CASCADE,null=True)
    Username = models.CharField(max_length=50, null=True)
    Phonenumber=models.IntegerField(null=True)
    Email=models.EmailField(max_length=254,null=True)
    Location = models.CharField(max_length=50, null=True)
    date_of_birth = models.DateField(null=True)
    gender=models.CharField(max_length=50,null=True)
    guests = models.CharField(max_length=50,null=True)
    comment = models.CharField(max_length=50,null=True)
    status = models.CharField(max_length=50,default="pending")
    def __str__(self):
        return f"{self.event} - {self.Username}"

class Contact_us(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    message = models.CharField(max_length=100)
    def __str__(self):
        return f"{self.name} - {self.email}"
    


class AskaQuestion(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    message = models.CharField(max_length=100)
    def __str__(self):
        return f"{self.name} - {self.email}"
    




class PeopleReviews(models.Model):
    UserName = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='images/',null=True)
    def __str__(self):
        return f"{self.UserName}"
    









class EventImage(models.Model):
    event = models.ForeignKey(Events, on_delete=models.CASCADE, related_name='event_images')
    image = models.ImageField(upload_to='images/', null=True)
    def __str__(self):
        return f"Image for {self.event.title}"







class EventOrganizer(models.Model):
    event = models.ForeignKey(Events, on_delete=models.CASCADE, related_name='event_organizer', default=None)
    name = models.CharField(max_length=50, null=True, blank=True)
    photo = models.ImageField(upload_to='images/', null=True)
    jobTitle = models.CharField(max_length=50, null=True, blank=True, default="")

    def __str__(self):
        return self.name