import createHttpError from 'http-errors';

function handleNotFoundError(req, res, next) {
  next(createHttpError[400]('Page Not Found'));
}

export { handleNotFoundError };
