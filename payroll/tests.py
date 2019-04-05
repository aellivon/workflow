from django.test import TestCase

# Create your tests here.
from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient, APITestCase

from .models import Payroll

class GeneratePayrollPDFTestCases(APITestCase):

    def setUp(self):
        """
            setting up our tests
        """
        # Creates the user
        User = get_user_model()

        user = User.objects.create_user(email="user1@test.com", password="user1234")
        self.valid_client = APIClient()
        # Authenticate user with the client 1
        user = User.objects.get(email='user1@test.com')
        self.valid_client.force_authenticate(user=user)

        # Creates the payroll to the valid client
        payroll = Payroll.objects.create(user=user)

        # Create invalid user to test with the payroll
        invalid_user = User.objects.create_user(email="user2@test.com", password="user1234")
        user_2 = User.objects.get(email='user2@test.com')
        self.invalid_client = APIClient()
        self.invalid_client.force_authenticate(user=user_2)

        self.url_to_test = reverse('payroll-report', kwargs={'id': payroll.id})

    def test_getting_a_payroll_report_with_the_valid_user(self):
        """
            Testing a valid user getting his own payroll.
        """
        response = self.valid_client.get(self.url_to_test, format='json')
        self.assertEqual(200, response.status_code)

    def test_getting_a_payroll_report_with_unauthenticated_credentials(self):
        """
             Test getting the payroll with unauthenticated credentials
        """
        unauth_client = APIClient()
        response = unauth_client.get(self.url_to_test, format='json')
        # Unauthorized client
        self.assertEqual(401, response.status_code)

    def test_getting_a_payroll_report_with_invalid_credentials(self):
        """
            Test getting the payroll with another credentials
        """
        response = self.invalid_client.get(self.url_to_test, format='json')
        # Forbidden Client
        self.assertEqual(403, response.status_code)