import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Task = sequelize.define('tasks', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export { Task };
