from datetime import datetime

from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

from .models import User
from .serializers import UserCreateSerializer, UserSerializer

# Create your views here.


class check_server(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        time = datetime.now().strftime("%H:%M:%S")
        return JsonResponse({"status": "Server is running", "time":time,"stat":HTTP_200_OK}, status=HTTP_200_OK)
class get_super_user(APIView):
   permission_classes=[IsAdminUser]
   def get(self,request,**kwargs):
       if request.method == "GET":
           email = kwargs['email']
           super_user = User.objects.filter(email=email,is_superuser=True)
           serializer = UserCreateSerializer(super_user, many = True);
           if len(serializer.data) == 0:
               return JsonResponse({"data":serializer.data,"success":"false"}, safe=False)
           else:
               return JsonResponse({"data":serializer.data,"success":"true"}, safe=False)
               
           
        