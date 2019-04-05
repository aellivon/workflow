from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from utils.mixins import Query, PDFHelper, MailHelper

from .serializers import PayrollSerializer
from .permissions import PayrollObjectPermission


class Payroll(Query, ViewSet):
    """ payroll worksheet endpoint
    """
    serializer_class = PayrollSerializer
    #permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            instance=self._get(self._model, **kwargs)
        )
        return Response(serializer.data, status=200)

    def filter(self, *args, **kwargs):
        serializer = self.serializer_class(
            instance=self._filter(
                self._model,
                user=self.request.user,
                **self.request.query_params.dict(),
            ),
            many=True,
        )

        return Response(serializer.data, status=200)

class PayrollReport(Query, PDFHelper, MailHelper, ViewSet):
    """
        Views regarding the report of a payroll.
    """
    serializer_class = PayrollSerializer
    permission_classes = (IsAuthenticated, PayrollObjectPermission)

    def download_pdf(self, *args, **kwargs):
        # Produces pdf and downloads it

        # This should get the data that we are going to access
        serializer = self.serializer_class(
            instance=self._get(self._model, **kwargs)
        )

        # Passes the data and produces the pdf based on those data
        return self.produce_payroll_pdf_as_a_response(serializer.data)

    def send_pdf(self, *args, **kwargs):

        # This should get the data that we are going to access
        serializer = self.serializer_class(
            instance=self._get(self._model, **kwargs)
        )

        # Passes the data and produces the pdf based on those data
        pdf, pdf_details = self.produce_payroll_as_an_attachment(serializer.data)
        self.send_payroll_email(pdf, pdf_details);
        return Response({}, status=200)