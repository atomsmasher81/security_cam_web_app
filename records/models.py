from django.contrib.auth.models import User
from django.db import models


# Create your models here.
from django.utils import timezone


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT)
    device_last_used = models.DateTimeField(default=timezone.now)


class TrustedPeople(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    relation = models.CharField(max_length=10)
    image_file = models.ImageField(null=True,upload_to='Documents')




class RecoginationLog(models.Model):
    recognised_person = models.ForeignKey(TrustedPeople, on_delete=models.PROTECT)
    timestamp = models.DateTimeField()
