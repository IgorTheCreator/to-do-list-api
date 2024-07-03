import { TaskRepository } from '../repositories/task.js';

const TaskService = {
  async createTask(taskDTO) {
    const createdTask = await TaskRepository.createTask(
      taskDTO.title,
      taskDTO.details,
      taskDTO.status,
      taskDTO.userId,
    );
    return createdTask;
  },

  async getAllTasks(userId, status) {
    const tasks = await TaskRepository.getAllTasks(userId, status);
    return tasks;
  },

  async getTaskById(taskId) {
    const task = await TaskRepository.getTaskById(taskId);
    return task;
  },

  async updateTask(userId, taskId, taskDTO) {
    const updatedTask = await TaskRepository.updateTask(
      userId,
      taskId,
      taskDTO.title,
      taskDTO.details,
      taskDTO.status,
      taskDTO.userId,
    );
    return updatedTask;
  },

  async deleteTask(userId, taskId) {
    await TaskRepository.deleteTask(userId, taskId);
  },
};

export { TaskService };
