import os
from django.views.generic import TemplateView

# Create your views here.

class IndexView(TemplateView):
    template_name = 'movies/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['data'] = {
            'api_key': os.getenv('MOVIES_API_KEY') 
        } # Add the API key to the context
        return context