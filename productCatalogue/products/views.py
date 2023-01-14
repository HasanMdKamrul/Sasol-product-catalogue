from django.shortcuts import render
from rest_framework.filters import SearchFilter
from rest_framework.generics import (CreateAPIView, DestroyAPIView,
                                     ListAPIView, RetrieveAPIView,
                                     UpdateAPIView)
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

from .models import Product
from .serializers import ProductSerializer

# Create your views here.

class Get_All_Products(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny,]
    filter_backends = [SearchFilter]
    search_fields = ('name',)
    
class Product_Add(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
class Product_Detail(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
class Product_Delete(APIView):
    permission_classes = [AllowAny]
    def delete(self,request,pk,*args,**kwargs):
        product_deleted = Product.objects.get(pk=pk)
        product_deleted.delete()
        return Response({"message" : "Post deleted"})
class Product_Update(UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    
# class Product_Delete(DestroyAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     permission_classes = [AllowAny]


# class Product_Update(APIView):
#     permission_classes = [AllowAny]
#     def put(self, request, pk, format=None, *args, **kwargs):
#         data = request.data
#         product_modified = Product.objects.get(pk=pk)
#         serializer = ProductSerializer(product_modified,data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=HTTP_200_OK)
            
#         return Response(serializer._errors, status=HTTP_400_BAD_REQUEST)