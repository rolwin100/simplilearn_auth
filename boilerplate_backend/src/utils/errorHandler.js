const errorHandler = (err, req, res, next, logger, config) => {
  // to not log http errors
  if (err.name !== 'HttpError') {
    logger.error(err);
  }
  const error = formatError(err);
  if (error.statusCode === 500 && process.env.NODE_ENV === 'production') {
    error.message = 'Sorry! something went wrong.';
  }
  res.status(error.statusCode || 500).send(error);
};

const formatError = (err) => {
  const formattedError = {
    status: 'error',
    statusCode: err.statusCode || 500,
    message: err.message || 'Something went wrong!',
    errors: {},
  };
  return formattedError;
};

module.exports = {
  errorHandler,
  formatError,
};
