# prueba3SI
## First Part API
## TaskViewSet
First of all run the proyect with django
The `TaskViewSet` in this project allows performing CRUD operations on tasks using Django Rest Framework.

### Usage

- To list all tasks: `GET /api/tasks/`
- To create a new task: `POST /api/tasks/`
- To retrieve a specific task: `GET /api/tasks/{id}/`
- To update a specific task: `PUT /api/tasks/{id}/`
- To delete a specific task: `DELETE /api/tasks/{id}/`
- To run test execute : ` python manage.py test tasks  `


### Front 

For better use of the API, there is a front made in react-vite in which tasks can be added as cards, as seen in the image, it is not yet integrated with the API since the test did not ask for it but it is could do it in a simple way

![Servinformacion](https://github.com/omar-vargas/prueba3SI/assets/69634983/3d295f09-a3b0-4ba6-a043-2baa0e587a6a)


to execute yo need react-vite and command : npm run dev
