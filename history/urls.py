from django.urls import path, re_path
from .views import Standup, StandUpHistory


urlpatterns = [
    # The history of a user's standup
    path('', StandUpHistory.as_view({
        'get': 'get'
    }), name=""),

    path('standup/', Standup.as_view({
        'post': 'post',
    }), name="standup"),
]