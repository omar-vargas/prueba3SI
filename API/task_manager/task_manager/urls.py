from rest_framework import routers
from tasks.views import TaskViewSet
from django.urls import path, include
router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # ... Otras URLs existentes en tu aplicación
]