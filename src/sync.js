/* eslint-disable no-unused-vars */
import { sequelize } from './config/database.js';
import { User } from './models/user.js';
import { Task } from './models/task.js';

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Успешно');
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
