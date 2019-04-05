import json

from django.conf import settings
from django.contrib.postgres.fields import JSONField

from django.db import models
from accounting.models import Project

from history.mixins import DailyStandup


class Done(models.Model):
    """ task that have been worked on (#1)
    """
    standup = models.ForeignKey('Standup', null=True, on_delete=models.CASCADE)
    content = models.TextField(null=True, blank=True)

    reference = models.TextField(null=True, blank=True)
    hours = models.DecimalField(max_digits=99, decimal_places=2, default=0.00)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "What i have worked on (#1)"
        verbose_name_plural = "What i have worked on (#1)"

    def __str__(self):
        return f"{self.standup}"


class Todo(models.Model):
    """ task to be worked on (#2)
    """
    standup = models.ForeignKey('Standup', null=True, on_delete=models.CASCADE)
    content = models.TextField(null=True, blank=True)

    reference = models.TextField(null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "What i am planning to do (#2)"
        verbose_name_plural = "What i am planning to do (#2)"

    def __str__(self):
        return f"{self.standup}"


class Blocker(models.Model):
    """ task blockers. (#3)
    """
    standup = models.ForeignKey('Standup', null=True, on_delete=models.CASCADE, related_name="standup_blockers")
    content = models.TextField(null=True, blank=True)

    reference = models.TextField(null=True, blank=True)
    is_fixed = models.BooleanField(default=False)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Issues/Blockers (#3)"
        verbose_name_plural = "Issues/Blockers (#3)"

    def __str__(self):
        return f"{self.standup}"


class Standup(DailyStandup, models.Model):
    """ daily report
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    project = models.ForeignKey(Project, null=True, on_delete=models.SET_NULL)
    raw = JSONField(default="{}", null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_created.editable = True
    
    date_updated = models.DateTimeField(auto_now=True)
    date_updated.editable = True

    @property
    def total_hours(self):
        hours = Done.objects.filter(standup=self).values_list('hours', flat=True)
        return sum(hours)

    @property
    def number_of_pending_issues(self):
        """
            Counts the number of issue that is not fixed
        """
        return Blocker.objects.filter(standup=self, is_fixed=False).count()

    def __str__(self):
        return f"({self.user} {self.project}) {self.date_updated}"

    def add_done(self, **params):
        """ add content on the done model
        """
        return Done.objects.create(standup=self, **params)

    def add_todo(self, **params):
        """ add content on the todo model
        """
        return Todo.objects.create(standup=self, **params)

    def add_blocker(self, **params):
        """ add content to the blocker model
        """
        return Blocker.objects.create(standup=self, **params)



