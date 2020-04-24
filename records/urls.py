from django.urls import path
from rest_framework import routers

from records.api import CustomerViewSet

# router = routers.DefaultRouter()
# router.register('api/customer',CustomerViewSet,'customers')

# urlpatterns = router.urls
from records.views import GetCustomer

urlpatterns = [
    path('',GetCustomer.as_view()),
]