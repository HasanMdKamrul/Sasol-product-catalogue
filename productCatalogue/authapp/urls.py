from django.urls import include, path

from .views import check_server, get_super_user

urlpatterns = [
  
    path('', include('djoser.urls') ),
    path('', include('djoser.urls.authtoken') ),
    path('check_server/', check_server.as_view(), name="check_server"),
    path('getsuperuser/<str:email>/', get_super_user.as_view(), name="get_super_user"),
   
]