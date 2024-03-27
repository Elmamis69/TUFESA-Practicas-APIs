const express = require('express');
const app = express();
const morgan = require('morgan');
const { globalErrorHandler, AppError } = require('./utils/appError');
require('dotenv').config();
const db = require('./config/db');
const boletoRouter = require('./routes/boletoRouter');

// Conexión a la base de datos
db.conectar();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.use('/api/boletos', boletoRouter);

// Manejador para rutas no encontradas
app.all('*', (req, res, next) => {
    const error = new AppError(`No se puede encontrar ${req.originalUrl} en este servidor`, 404);
    next(error);
});

// Manejador de errores global
app.use(globalErrorHandler);

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
