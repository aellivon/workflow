from rest_framework import permissions
from utils.mixins import PermissionHelper

from .models import Payroll

class PayrollObjectPermission(permissions.BasePermission, PermissionHelper):
    """
        Only grant the permission if the payroll object 
        is the same as the logged in user.
    """

    def has_permission(self, request, view):

        """
            Note: We could theortically use the "view" to access the serialzier
                (to elimante the filter here) and check permission from there.
                but don't do that, we might use this permission on another view with another 
                serializer.
        """

        payroll_id = request.resolver_match.kwargs.get("id")
        user_id = request.user.id

        # This return of false depending if the query exists or not
        return self.check_get_query_result_if_exists(Payroll, pk=payroll_id, user__id=user_id) 