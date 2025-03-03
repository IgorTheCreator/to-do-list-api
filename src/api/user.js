import express from 'express';
import { UserController } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/signup', UserController.signup);

export { userRouter };
