# tasks/tests.py

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer

class TaskViewSetTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.task_data = {
            'title': 'Tarea de prueba',
            'description': 'Descripción de la tarea',
            'state': 'pending'
        }
        self.task = Task.objects.create(**self.task_data)

    def test_get_all_tasks(self):
        response = self.client.get('/api/tasks/')
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_task(self):
        response = self.client.post('/api/tasks/', self.task_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_task_detail(self):
        response = self.client.get(f'/api/tasks/{self.task.id}/')
        task = Task.objects.get(id=self.task.id)
        serializer = TaskSerializer(task)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_task(self):
        updated_data = {'title': 'Tarea actualizada'}
        response = self.client.put(f'/api/tasks/{self.task.id}/', self.task_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_task(self):
        response = self.client.delete(f'/api/tasks/{self.task.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
