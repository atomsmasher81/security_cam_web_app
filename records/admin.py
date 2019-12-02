from django.contrib import admin
from .models import Customer,TrustedPeople,RecoginationLog
# Register your models here.
admin.site.site_header = 'SECURITY CAMERA WEB APPLICATION'


admin.site.register(Customer)
admin.site.register(TrustedPeople)
admin.site.register(RecoginationLog)
