from rest_framework.serializers import ModelSerializer

from .models import *


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
class GuestBookSerializer(ModelSerializer):
    class Meta:
        model = GuestBook
        fields = '__all__'
    
class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        