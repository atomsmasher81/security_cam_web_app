from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

from records.models import Customer, TrustedPeople
from rest_framework import viewsets, permissions

from records.serializers import CustomerSerializers

filter_type = {}


def signup(request):
    username, password = request.data.get('username'), request.data.get('password')
    email = request.data.get('email')
    if not username or not password or not email:
        return Response({'message': 'required params not provided'})
    user = User.objects.create_user(username, email, password)
    cust = Customer.objects.create(user=user)
    return Response({'message': 'successfully saved'})


def get_trusted_people(request):
    # filter_type['user'] = request.user
    filter_type['user_id'] = 1
    return Response(TrustedPeople.objects.filter(**filter_type).values('name', 'relation', 'image_file'))


def add_trusted_people(request):
    try:
        print(request.data)
    except Exception as e:
        print(e)

    name = request.data.get('name')
    relation = request.data.get('relation')
    image = request.data.get('image')

    try:
        cust = Customer.objects.get(user_id=1)
    except:
        return Response({'message': 'invalid user'},400)
    TrustedPeople.objects.get_or_create(name=name, image_file=image, relation=relation, user_id = 1)
    return Response({'message': 'saved sucessfully'})


def get_detected_people(request):
    return Response('working')
