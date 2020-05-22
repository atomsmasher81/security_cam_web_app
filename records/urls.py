from django.urls import path
from rest_framework import routers


# urlpatterns = router.urls
from records.views import GetCustomer, TrustedPeopleView, SignUpView, DetectedPeopleView

urlpatterns = [
    path('',GetCustomer.as_view()),
    path('trusted_people/',TrustedPeopleView.as_view()),
    path('detected_people/',DetectedPeopleView.as_view()),
    path('signup/',SignUpView.as_view()),

]