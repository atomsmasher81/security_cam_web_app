from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from records.models import Customer
filter_type = {}

class GetCustomer(APIView):
    def get(self,request):

        a = Customer.objects.filter(**filter_type).values('auth_user__username','device_last_used')
        return Response(a)
