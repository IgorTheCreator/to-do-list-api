import { UserRepository } from '../repositories/user.js';
import { hashData } from '../utils/hashData.js';

const UserService = {
  async signUp(userDTO) {
    const hashedPassword = hashData(userDTO.password);

    const createdUser = await UserRepository.createUser(
      userDTO.username,
      hashedPassword,
    );
    return createdUser;
  },

  async findUser(username) {
    const user = await UserRepository.findUser(username);
    return user;
  },
};

export { UserService };
