# tasks/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

# Crear un router y registrar el TaskViewSet
router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

# Incluir las URLs generadas por el router en tus URLs principales
urlpatterns = [
    path('api/', include(router.urls)),
    # ... Otras URLs existentes en tu aplicación
]
