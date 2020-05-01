from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from records.api import get_trusted_people, add_trusted_people, get_detected_people, login
from records.models import Customer, TrustedPeople

filter_type = {}


class GetCustomer(APIView):
    def get(self, request):
        a = Customer.objects.filter(**filter_type).values('auth_user__username', 'device_last_used')
        return Response(a)


class TrustedPeopleView(APIView):
    def get(self, request):
        # return Response(TrustedPeople.objects.filter(**filter_type).values('name','relation','image_file'))
        return get_trusted_people(request)

    def post(self, request):
        return add_trusted_people(request)


class DectectedPeopleView(APIView):
    def get(self, request):
        return get_detected_people(request)


class LoginView(APIView):
    def post(self,request):
        return login(request)