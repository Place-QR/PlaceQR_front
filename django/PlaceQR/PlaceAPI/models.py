from django.db import models

# Create your models here.


class User(models.Model):
    pass


class GuestBook(models.Model):
    user_index = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True, null=True)


class Comment(models.Model):
    user_index = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    guestbook_index = models.ForeignKey(GuestBook, on_delete=models.CASCADE, null=True)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True, null=True)
