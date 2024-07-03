import auth from 'basic-auth';
import createHttpError from 'http-errors';
import { UserService } from '../services/user.js';
import { decodeData } from '../utils/decodeData.js';

async function authenticate(req, res, next) {
  const credentials = auth(req);

  if (credentials) {
    const user = await UserService.findUser(credentials.name);

    if (user && credentials.pass === decodeData(user.password)) {
      req.user = user;
      return next();
    }
  }

  res.set('WWW-Authenticate', 'Basic realm="to-do-list"');
  return next(createHttpError[401]('Something Went Wrong'));
}

export { authenticate };
