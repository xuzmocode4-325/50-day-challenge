from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'pokedex/index.html'