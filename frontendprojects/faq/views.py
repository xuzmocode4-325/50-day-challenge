from django.views.generic import TemplateView

# Create your views here.


class IndexView(TemplateView):
    template_name = 'faq/index.html'
