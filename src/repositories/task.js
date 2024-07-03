import { Task } from '../models/task.js';

const TaskRepository = {
  async createTask(title, details, status, userId) {
    try {
      const createdTask = await Task.create({
        title,
        details,
        status,
        userId,
      });
      return createdTask;
    } catch (err) {
      console.error(err);
      return null;
    }
  },

  async getAllTasks(userId, status) {
    if (status) {
      const tasks = await Task.findAll({ where: { userId, status } });
      return tasks;
    }
    const tasks = await Task.findAll({ where: { userId } });
    return tasks;
  },

  async getTaskById(taskId) {
    const task = await Task.findOne({ where: { id: taskId } });
    return task;
  },

  async updateTask(userId, taskId, title, details, status) {
    try {
      await Task.update(
        {
          title,
          details,
          status,
        },
        { where: { id: taskId, userId } },
      );
    } catch (err) {
      console.log(err);
    }
  },

  async deleteTask(userId, taskId) {
    try {
      await Task.destroy({ where: { id: taskId, userId } });
    } catch (err) {
      console.error(err);
    }
  },
};

export { TaskRepository };
