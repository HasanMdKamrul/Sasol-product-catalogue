
from django.contrib import admin
from django.urls import include, path
from products.views import (Get_All_Products, Product_Add, Product_Delete,
                            Product_Detail, Product_Update,
                            prodcuts_by_user_id)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/products/', Get_All_Products.as_view(), name="products"),
    path('api/products/add/', Product_Add.as_view(), name="add_product"),
    path('api/products/<int:pk>/', Product_Detail.as_view(), name="product_detail"),
    path('api/products/<int:pk>/delete/', Product_Delete.as_view(), name="product_delete"),
    path('api/products/<int:pk>/update/', Product_Update.as_view(), name="product_update"), 
    path('api/products/user/<int:id>/', prodcuts_by_user_id.as_view(), name="products_by_user_id"),
    # path('api/products/user/<int:id>/', products_by_id, name="products_by_user_id"),
    path('auth/', include('authapp.urls'), name='auth')  
]
