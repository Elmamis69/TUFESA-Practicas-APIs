const EmpleadoDAO = require("../dataAccess/empleadoDAO");
const { AppError } = require("../utils/appError");
const mongoose = require("mongoose"); // Añade esta línea

class EmpleadoController {
  static async crearEmpleado(req, res, next) {
    try {
      const { numero, correo, RFC } = req.body;
      if (!numero || !correo || !RFC) {
        return next(new AppError("Faltan campos requeridos", 400));
      }

      // Generar un nuevo ObjectId
      const _id = new mongoose.Types.ObjectId();

      // Incluir _id en empleadoData
      const empleadoData = { _id, numero, correo, RFC };

      // Pasar empleadoData al método crear de EmpleadoDAO
      const empleado = await EmpleadoDAO.crear(empleadoData);
      console.log(empleadoData);
      res.status(201).json(empleado);

    } catch (error) {
      console.error(error);
      next(new AppError("Error al crear empleado", 500));
    }
  }

  // Método para obtener todos los empleados
  static async obtenerEmpleados(req, res, next) {
    try {
      // Llamar al método de EmpleadoDAO para obtener todos los empleados
      const empleados = await EmpleadoDAO.obtenerEmpleados();

      // Enviar la respuesta con los empleados obtenidos
      res.status(200).json(empleados);
    } catch (error) {
      console.error(error);
      next(new AppError("Error al obtener empleados", 500));
    }
  }

  // Método para obtener un empleado por número
  static async obtenerEmpleadoPorNumero(req, res, next) {
    try {
      // Obtener el número de empleado de los parámetros de la URL
      const { numero } = req.params;

      // Llamar al método de EmpleadoDAO para obtener un empleado por número
      const empleado = await EmpleadoDAO.obtenerPorNumEmpleado(numero);

      // Enviar la respuesta con el empleado obtenido
      res.status(200).json(empleado);
    } catch (error) {
      console.error(error);
      next(new AppError("Error al obtener empleado", 500));
    }
  }
}

module.exports = EmpleadoController;
