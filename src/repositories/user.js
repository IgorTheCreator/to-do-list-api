import { User } from '../models/user.js';

const UserRepository = {
  async createUser(username, password) {
    await User.create({
      username,
      password,
    });
  },

  async findUser(username) {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    return user;
  },
};

export { UserRepository };
