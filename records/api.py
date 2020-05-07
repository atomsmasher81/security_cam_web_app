from rest_framework.decorators import api_view
from rest_framework.response import Response

from records.models import Customer, TrustedPeople
from rest_framework import viewsets, permissions

from records.serializers import CustomerSerializers

filter_type = {}


def login(request):
     username,password = request.data.get('username'),request.data.get('password')
     return Response('working')


def get_trusted_people(request):
    return Response(TrustedPeople.objects.filter(**filter_type).values('name', 'relation', 'image_file'))


def add_trusted_people(request):
    name = request.data.get('name')
    relation = request.data.get('relation')
    image = request.FILES['image']

    TrustedPeople.objects.get_create(name=name,image= image,relation=relation,customer__auth_user= request.user)
    return Response('working')


def get_detected_people(request):
    return Response('working')
