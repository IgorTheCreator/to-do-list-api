import createHttpError from 'http-errors';

function handleNotFoundError(req, res, next) {
  next(createHttpError[404]('Page Not Found'));
}

export { handleNotFoundError };
