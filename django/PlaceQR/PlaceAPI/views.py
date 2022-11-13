from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer, GuestBookSerializer, CommentSerializer
from .models import User, GuestBook, Comment

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class GuestBookViewSet(ModelViewSet):
    queryset = GuestBook.objects.all()
    serializer_class = GuestBookSerializer

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    


