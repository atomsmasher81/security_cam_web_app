from django.conf.urls import url
from django.http import JsonResponse
from django.urls import path
from django.views.static import serve
from rest_framework import routers

# urlpatterns = router.urls
from records.views import GetCustomer, TrustedPeopleView, SignUpView, DetectedPeopleView, GoLiveView




urlpatterns = [
    path('', GetCustomer.as_view()),
    path('trusted_people/', TrustedPeopleView.as_view()),
    path('detected_people/', DetectedPeopleView.as_view()),
    # path('detected_people/', DetectedPeopleView.as_view()),
    path('go_live/', GoLiveView.as_view()),
    path('signup/', SignUpView.as_view()),


]
