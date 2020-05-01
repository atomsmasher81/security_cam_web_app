from django.urls import path
from rest_framework import routers


# urlpatterns = router.urls
from records.views import GetCustomer, TrustedPeopleView

urlpatterns = [
    path('',GetCustomer.as_view()),
    path('trusted_people/',TrustedPeopleView.as_view()),
]