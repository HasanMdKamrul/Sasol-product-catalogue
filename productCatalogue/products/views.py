from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.generics import (CreateAPIView, DestroyAPIView,
                                     ListAPIView, RetrieveAPIView,
                                     UpdateAPIView)
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

from .models import Product
from .serializers import ProductSerializer

# Create your views here.

class StandardResultsSetPagination(PageNumberPagination):
    # ** Elements Per Page
    page_size = 3
    page_size_query_param = 'page_size'
    max_page_size = 3

class Get_All_Products(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny,]
    filter_backends = [SearchFilter,OrderingFilter]
    search_fields = ('name',)
    pagination_class = StandardResultsSetPagination
    
class Product_Add(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]
class Product_Detail(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated,]
class Product_Delete(APIView):
    permission_classes = [IsAuthenticated,]
    def delete(self,request,pk,*args,**kwargs):
        product_deleted = Product.objects.get(pk=pk)
        product_deleted.delete()
        return Response({"message" : "Post deleted"})
class Product_Update(UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated,]
    


# @csrf_exempt
# def products_by_id(request,**kwargs):
#     if request.method == 'GET':
#         products = Product.objects.filter(User=kwargs['id'])
#         serializer = ProductSerializer(products,many=True)
#         return JsonResponse(data=serializer.data,safe=False)
        

class prodcuts_by_user_id(APIView):
    permission_classes = [IsAuthenticated,]
    def get(self,request,*args,**kwargs):
        # ** getting the user id from the url
       id = kwargs['id']
    #    ** filter the products by user id
       products = Product.objects.filter(User=id)
    #    ** products json serialization
       serializer = ProductSerializer(products,many=True)
       return JsonResponse(data=serializer.data,safe=False)
       

# class prodcuts_by_user_id(ListAPIView):
#     serializer_class = ProductSerializer
#     permission_classes = [AllowAny,]
#     def get_queryset(self):
#         print(self.kwargs['id'])
#         user_id = self.kwargs['id']
#         products = Product.objects.filter(User=user_id);
#         return products




    
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