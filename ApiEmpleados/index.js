const express = require('express');
const app = express();
const morgan = require('morgan');
const {globalErrorHandler, AppError} = require('./utils/appError');
require('dotenv').config();
const db = require('./config/db');
const empleadoRouter = require('./routes/empleadoRouter');

db.conectar()

app.use(express.json());
app.use(morgan('dev'));

app.use('/tufesa/empleados', empleadoRouter);

app.all('*', (req, res, next) => {
    const error = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    next(error);
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});