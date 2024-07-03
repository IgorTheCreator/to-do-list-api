import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { Task } from './task.js';

const User = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Task, { foreignKey: 'userId' });

export { User };
