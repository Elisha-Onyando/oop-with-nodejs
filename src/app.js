const express = require('express');
const morgan = require('morgan')
const userRouter = require('./routes/userRoutes');

const app = express();
const env = "dev";

app.use(express.json());

if (env === 'dev') {
  app.use(morgan('dev'));
}

app.use('/api/v1/users', userRouter);

module.exports = app;