const express = require('express');
const EmpleadoController = require('../controllers/empleadoController')
const router = express.Router();

// Ruta para obtener todos los empleados
router.get('/', EmpleadoController.obtenerEmpleados);

// Ruta para obtener todos los empleados
router.get('/:numero', EmpleadoController.obtenerEmpleadoPorNumero);

// Ruta para crear un nuevo empleado
router.post('/', EmpleadoController.crearEmpleado);

module.exports = router;