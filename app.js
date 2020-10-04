const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use(morgan('dev'));

// TODO: middleware

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// TODO: routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

module.exports = app;
