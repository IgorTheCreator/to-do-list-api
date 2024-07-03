import { UserService } from '../services/user.js';
import createHttpError from 'http-errors';

const UserController = {
  async signup(req, res, next) {
    const userDTO = req.body;
    try {
      const existingUser = await UserService.findUser(userDTO.username);
      if (existingUser) {
        throw createHttpError[401]('User Already Exist');
      }
      await UserService.signUp(userDTO);
      return res.status(201).json({ message: 'User Has Been Created' });
    } catch (err) {
      return next(err);
    }
  },
};

export { UserController };
