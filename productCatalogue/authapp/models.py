from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True)
    REQUIRED_FIELDS = ['username','first_name', 'last_name']
    USERNAME_FIELD = 'email'
    
    def __str__(self):
        return self.email
    
    class Meta:
        ordering = ['email']
    
  
    # def get_username(self):
    #     return self.email
