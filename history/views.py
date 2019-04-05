from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from utils.mixins import Query

from .serializers import StandupSerializer, StandUpHistorySerializer


class Standup(ViewSet):
    """ daily standup endpoint
    """
    serializer_class = StandupSerializer

    def post(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=200)

        # return Response({
        #     "response_type": "in_channel",
        #     "text": ", ".join([i[1][0].__str__() for i in serializer.errors.items()]),
        # }, status=200)


class StandUpHistory(Query, ViewSet):

    serializer_class = StandUpHistorySerializer

    def get(self, *args, **kwargs):
        """
            Get all serializer and list all blockers that is currently active.
        """
        
        serializer = self.serializer_class(
            instance=self._filter(self._model,user=self.request.user),
            many=True,
        )
        
        return Response(serializer.data, status=200)