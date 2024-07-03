import express from 'express';
import { handleError } from './middlewares/error-handling.js';
import { handleNotFoundError } from './middlewares/not-found-error-handling.js';
import { userRouter } from './api/user.js';

const app = express();

app.use(express.json());

app.use(userRouter);

app.use(handleNotFoundError);
app.use(handleError);

export { app };
