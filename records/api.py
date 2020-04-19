from records.models import Customer
from rest_framework import viewsets,permissions

from records.serializers import CustomerSerializers


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = CustomerSerializers