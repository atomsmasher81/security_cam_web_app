import os
from pathlib import Path

from PIL import Image
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

from records.models import Customer, TrustedPeople
from rest_framework import viewsets, permissions

from records.serializers import CustomerSerializers
from security_cam_web_app.settings import BASE_DIR, DOCS_ROOT

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
    user_id =1
    filter_type['user_id'] =user_id

    images = list(sorted(Path(DOCS_ROOT + f'/trusted_people/{user_id}/').iterdir(), key=os.path.getmtime))
    images = [str(i).split('/')[-1:] for i in images]

    res = {
        'data':TrustedPeople.objects.filter(**filter_type).values('name', 'relation','user_id'),
        'images':images
                     }
    return Response(res
    )


def add_trusted_people(request):
    try:
        print(request.data)
    except Exception as e:
        print(e)
    name = request.data.get('name')
    relation = request.data.get('relation')
    image = request.data.get('image')
    user_id = 1
    try:
        cust = Customer.objects.get(user_id=1)
    except:
        return Response({'message': 'invalid user'},400)
    TrustedPeople.objects.get_or_create (name=name, relation=relation, user_id = 1)

    os.makedirs(BASE_DIR + f'/media/trusted_people/{user_id}/',exist_ok =True)
    dirs = os.listdir(BASE_DIR + f'/media/trusted_people/{user_id}/')
    tag = None
    for dir in dirs:
        if name in dir:
            tag = dir[-2:]
            break
    if not tag:
        tag = f'0{len(dirs) + 1}' if len(dirs) < 10 else (len(dirs) +1)
    os.makedirs(BASE_DIR + f'/media/trusted_people/{user_id}/{name}_{tag}/', exist_ok=True)
    same_person_count = len(os.listdir(BASE_DIR + f'/media/trusted_people/{user_id}/{name}_{tag}/'))
    Image.open(image).save(BASE_DIR + f'/media/trusted_people/{user_id}/{name}_{tag}/{same_person_count +1}.jpeg', 'jpeg')
    return Response({'message': 'saved sucessfully'})


def get_detected_people(request):
    user_id = 1
    images = list(sorted(Path(DOCS_ROOT + f'/postprocessed/{user_id}/').iterdir(), key=os.path.getmtime))
    res = []
    for i in images:
        res.append((str(i).split('/')[-1:],os.path.getctime(i)))
    return Response({'data':res,
                     'user_id':user_id})
