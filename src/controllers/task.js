import createHttpError from 'http-errors';
import { TaskService } from '../services/task.js';

const TaskController = {
  async createTask(req, res, next) {
    const userId = req.user.id;
    try {
      const taskDTO = { ...req.body, userId };
      const createdTask = await TaskService.createTask(taskDTO);
      if (!createdTask) {
        return next(createHttpError[403]('Something Went Wrong'));
      }
      return res.status(201).json({ task: createdTask });
    } catch (err) {
      return next(err);
    }
  },

  async getAllTasks(req, res, next) {
    const status = req.query.status;
    const userId = req.user.id;
    try {
      const tasks = await TaskService.getAllTasks(userId, status);
      return res.status(200).json({ tasks });
    } catch (err) {
      next(err);
    }
  },

  async getTaskById(req, res, next) {
    const taskId = req.params.taskId;
    try {
      const task = await TaskService.getTaskById(taskId);
      return res.status(200).json({ task });
    } catch (err) {
      next(err);
    }
  },

  async updateTask(req, res, next) {
    const taskId = req.params.taskId;
    const userId = req.user.id;
    try {
      const taskDTO = { ...req.body };
      await TaskService.updateTask(userId, taskId, taskDTO);
      return res.status(201).json({ message: 'Updated' });
    } catch (err) {
      return next(err);
    }
  },

  async deleteTask(req, res, next) {
    const userId = req.user.id;
    const taskId = req.params.taskId;
    try {
      await TaskService.deleteTask(userId, taskId);
      return res.status(204).end();
    } catch (err) {
      return next(err);
    }
  },
};

export { TaskController };
