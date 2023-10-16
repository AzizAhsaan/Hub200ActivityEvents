from django.urls import path
from . import views
urlpatterns = [
    path("", views.home, name="home"),
    path("events", views.events, name="events"),
    path("calendar", views.calendar, name="calendar"),
    path("signin", views.signin, name="signin"),
    path("signup", views.signup, name="signup"),
    path("logoutuser", views.logoutuser, name="logoutuser"),
    path("registrations", views.registrations, name="registrations"),
    path("signingupdone", views.signingupdone, name="signingupdone"),
    path("errorpage", views.errorpage, name="errorpage"),
    path("get_events/", views.get_events, name="get_events"),
    path("events_details", views.events_details, name="event_details"),
    path("display_event/<int:event_id>", views.display_event, name="display_event"),
    path("apply_filter", views.apply_filter, name="apply_filter"),
    path("attendess", views.attendess, name="attendess"),
    path("attendess/<int:attendess_id>", views.attendessDetails, name="attendessDetails"),
    path("contactus", views.contactus, name="contactus"),
    path("eventsRange", views.eventsRange, name="eventsRange"),
    path("ASKAQUESTION", views.ASKAQUESTION, name="ASKAQUESTION"),


]
