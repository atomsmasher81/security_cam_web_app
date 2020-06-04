import os

from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static
from django.http import JsonResponse
from django.urls import path, include
from django.views.static import serve
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from security_cam_web_app.settings import MEDIA_URL, MEDIA_ROOT, DOCS_URL, DOCS_ROOT
import tempfile, zipfile
from django.http import HttpResponse
from wsgiref.util import FileWrapper

def protected_serve(request, path, document_root=None, show_indexes=False):

    try:
        return serve(request, path, document_root, show_indexes)
    except ValueError:
        return JsonResponse({'error': 'ACCESS DENIED!!'}, status=401)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/',include('records.urls')),
    url(r'^%s(?P<path>.*)$' % DOCS_URL[1:], protected_serve, {'document_root': DOCS_ROOT}),
]+ static(MEDIA_URL, document_root=MEDIA_ROOT)
