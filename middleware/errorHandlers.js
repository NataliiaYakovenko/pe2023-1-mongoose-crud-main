const {Error: { ValidationError, CastError }} = require('mongoose');

module.exports.errorMongooseHandler = async (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).send(err.message);
  }

  if (err instanceof CastError) {
    return res.status(400).json({ error: 'Invalid ObjectId' });
  }

  return res.status(500).send('Unknow error');
};



module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = err.status ?? 500;

  res.status(status).send({
    errors: [
      {
        status,
        title: err.message ?? 'Server Error',
      },
    ],
  });
};
