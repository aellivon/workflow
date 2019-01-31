import json
import re

from pygments import highlight
from pygments.lexers import JsonLexer
from pygments.formatters import HtmlFormatter

from django.db import models
from django.contrib import admin
from django.contrib.postgres.fields import JSONField
from django.forms import Textarea
from django.utils.safestring import mark_safe

from daterange_filter.filter import DateRangeFilter
from utils.mixins import JSONParser

from .models import Standup, Done, Todo, Blocker


class DoneAdmin(admin.TabularInline):
    """ admin inline panel config
    """
    model = Done
    extra = 0
    list_display = ('content', 'date_created', 'date_updated')

    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':8, 'cols':70})},
    }

    def get_readonly_fields(self, request, obj=None):
        """ make fields readonly if the user
            is a superuser.
        """
        if request.user.is_staff and not request.user.is_superuser:
            return []
        return ['content', 'reference', 'hours', 'date_updated']


class TodoAdmin(admin.TabularInline):
    """ admin inline panel config
    """
    model = Todo
    extra = 0
    list_display = ('content', 'date_created', 'date_updated')

    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':8, 'cols':70})},
    }

    def get_readonly_fields(self, request, obj=None):
        """ make fields readonly if the user
            is a superuser.
        """
        if request.user.is_staff and not request.user.is_superuser:
            return []
        return ['content', 'reference', 'date_updated']


class BlockerAdmin(admin.TabularInline):
    """ admin inline panel config
    """
    model = Blocker
    extra = 0
    list_display = ('content', 'date_created', 'date_updated')
    fields = ('content', 'reference', 'is_fixed')

    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':8, 'cols':70})},
    }

    def get_readonly_fields(self, request, obj=None):
        """ make fields readonly if the user
            is a superuser.
        """
        if request.user.is_staff and not request.user.is_superuser:
            return []
        return ['content', 'reference', 'date_updated']


class StandupAdmin(JSONParser, admin.ModelAdmin):
    """ admin panel config
    """
    model = Standup
    inlines = (DoneAdmin, TodoAdmin, BlockerAdmin)

    list_display = ('date_created', 'date_updated', 'user', 'project', 'get_total_hours', 'get_issues', 'get_needs_checking')
    search_fields = ('user__email', 'user__first_name', 'user__last_name', 'project__name')
    list_filter = (('date_created', DateRangeFilter), 'user__first_name', 'project__name',)
    editable_fields = ('date_created', 'date_updated')
    readonly_fields = ('raw_data',)
    exclude = ('raw',)

    def get_total_hours(self, obj):
        return f"{obj.total_hours}"

    get_total_hours.short_description = "Total Hours"

    def get_issues(self, obj):
        """ check if there are issues or none
        """
        if Blocker.objects.filter(standup=obj, is_fixed=False).exists():
            return True
        return False

    get_issues.boolean = True
    get_issues.short_description = "Has Issues"

    def get_needs_checking(self, obj):
        """ 
        """
        #import pdb;pdb.set_trace()
        #content1 = sum() / content1.count()

        if self._eval_report_count(Done.objects.filter(standup=obj)) or \
           self._eval_report_count(Todo.objects.filter(standup=obj)):
           return True
        return False

    get_needs_checking.boolean = True
    get_needs_checking.short_description = "Needs to be Checked"

    def _eval_report_count(self, instances):
        """ returns a list of true or false
        """
        content = list(len(i) for i in instances.values_list('content', flat=True) if i)
        return [True if i < 6 else False for i in content].count(True) > 0

    def raw_data(self, instance):
        """Function to display pretty version of our data"""
        rawdata = json.loads(instance.raw)
        #import pdb;pdb.set_trace()
        rawdata['text'] = self.convert_text_to_json(rawdata['text'])

        # Convert the data to sorted, indented JSON
        response = json.dumps(rawdata, sort_keys=True, indent=2)

        # Get the Pygments formatter
        formatter = HtmlFormatter(style='colorful')

        # Highlight the data
        response = highlight(response, JsonLexer(), formatter)

        # Get the stylesheet
        overflow = ".highlight{overflow-x: scroll;max-width: 1024px;}"
        style = "<style>" + formatter.get_style_defs() + overflow + "</style><br>"

        # Safe the output
        return mark_safe(style + response)

    def convert_text_to_json(self, text):
        """ convert report text to json
        """
        splittext = re.split(r'\[\w+\]', text)
        return {['done', 'todo', 'blocker'][i]: self._construct_report(value) for i, value in enumerate(self._clean_list(splittext))}


admin.site.register(Standup, StandupAdmin)









