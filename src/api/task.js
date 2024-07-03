import express from 'express';
import { TaskController } from '../controllers/task.js';

const taskRouter = express.Router();

taskRouter.get('/tasks', TaskController.getAllTasks);
taskRouter.get('/tasks/:taskId', TaskController.getTaskById);
taskRouter.post('/tasks/create', TaskController.createTask);
taskRouter.put('/tasks/update/:taskId', TaskController.updateTask);
taskRouter.delete('/tasks/delete/:taskId', TaskController.deleteTask);

export { taskRouter };
