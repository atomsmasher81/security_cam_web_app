from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class Customer(models.Model):
    auth_user = models.OneToOneField(User, on_delete=models.PROTECT)
    device_last_used = models.DateTimeField()


class TrustedPeople(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    relation = models.CharField(max_length=10)
    image_file = models.ImageField(null=True)




class RecoginationLog(models.Model):
    recognised_person = models.ForeignKey(TrustedPeople, on_delete=models.PROTECT)
    timestamp = models.DateTimeField()
