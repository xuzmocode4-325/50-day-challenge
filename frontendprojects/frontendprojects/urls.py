"""
URL configuration for frontendprojects project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from . import views
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('__reload__/', include('django_browser_reload.urls')),
    path('cards/', include('cards.urls')),
    path('steps/', include('steps.urls')),
    path('navigation/', include('navigation.urls')),
    path('search/', include('search.urls')),
    path('blureffect/', include('blureffect.urls')),
    path('scroll/', include('scroll.urls')),
    path('split/', include('split_landing.urls')),
    path('waveform/', include('waveform.urls')),
    path('calendar/', include('calendar.urls')),
    path('jokes/', include('jokes.urls')),
    path('keycodes/', include('keycodes.urls')),
    path('faq/', include('faq.urls')),
    path('randomchoice/', include('randomchoice.urls')),
    path('stylishnav/', include('stylishnav.urls')),
    path('counter/', include('counter.urls')),
    path('drinkwater/', include('drinkwater.urls')),
    path('movies/', include('movies.urls')),
    path('slideshow/', include('slideshow.urls')),
    path('clock/', include('clock.urls')),
    path('dragdrop/', include('dragdrop.urls')),
    path('drawing/', include('drawing.urls')),
    path('kinetic/', include('kinetic.urls')),
    path('placeholder/', include('placeholder.urls')),
    path('stickynav/', include('stickynav.urls')),
    path('verticalslider/', include('verticalslider.urls')),
    path('pokedex/', include('pokedex.urls')),
    path('toast/', include('toast.urls')),
    path('timer/', include('timer.urls')),
    path('autotext/', include('autotext.urls')),
    path('checkboxes/', include('checkboxes.urls')),
    path('hoverboard/', include('hoverboard.urls')),
    path('verifyer/', include('verifyer.urls')),
    path('feedback/', include('feedback.urls')),
    path('quiz/', include('quiz.urls')),
    path('testimonials/', include('testimonials.urls')),
    path('randomfeed/', include('randomfeed.urls')),
    path('mobiletab/', include('mobiletab.urls')),
    path('password/', include('password.urls')),
    path('ripple/', include('ripple.urls')),
    path('', views.IndexView.as_view(), name='home')
]
