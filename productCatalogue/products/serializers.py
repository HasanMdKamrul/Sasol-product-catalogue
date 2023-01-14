import datetime
import locale

import pytz
from rest_framework import serializers

from .models import Product

# ** Datetime import 


# ** Standard Berlin time get
time_zone = pytz.timezone('Europe/Berlin')
berlin_time = datetime.datetime.now(time_zone)
berlin_current_time = berlin_time.strftime("%H:%M:%S")

class ProductSerializer(serializers.ModelSerializer):
    temp_price = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "description",
            "price",
            "picture",
            "active",
            "temp_price"
        )
        
    def get_temp_price(self, obj):
        if berlin_current_time > "11:00:00" and berlin_current_time < "15:00:00":
            return  obj.price - obj.price * 0.1
        else:
            return obj.price