from django.db import models
from django.core.exceptions import ValidationError

class Task(models.Model):
    TITLE_CHOICES = [
        ('pending', 'Pendiente'),
        ('in_progress', 'En progreso'),
        ('completed', 'Completada'),
    ]
    
    title = models.CharField(max_length=100)
    description = models.TextField()
    state = models.CharField(max_length=20, choices=TITLE_CHOICES, default='pending')
    def clean(self):
        # Validación para garantizar que los campos obligatorios estén presentes
        if not self.title or not self.description:
            raise ValidationError("El título y la descripción son campos obligatorios.")

        # Validación para garantizar que el estado sea uno de los valores permitidos
        valid_states = [choice[0] for choice in self.TITLE_CHOICES]
        if self.state not in valid_states:
            raise ValidationError("Estado no válido.")



