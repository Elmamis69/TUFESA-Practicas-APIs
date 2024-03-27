const BoletoDAO = require("../dataAccess/boletoDAO");
const { AppError } = require("../utils/appError");
 
class BoletoController {
  // Método para crear un nuevo boleto
  static async crearBoleto(req, res, next) {
    try {
      // Obtener los datos del cuerpo de la solicitud
      const { numero, nombre, origen, destino, numeroAutobus, numeroAsiento, fechaViaje, servicio, descuento } = req.body;

      // Verificar si faltan campos requeridos
      if (!numero || !nombre || !origen || !destino || !numeroAutobus || !numeroAsiento || !fechaViaje || !servicio || !descuento) {
        return next(new AppError("Faltan campos requeridos", 400));
      }

      // Crear un objeto con los datos del boleto
      const boletoData = { numero, nombre, origen, destino, numeroAutobus, numeroAsiento, fechaViaje, servicio, descuento };

      // Llamar al método para crear un boleto en la capa de acceso a datos
      const boleto = await BoletoDAO.crear(boletoData);

      // Enviar la respuesta con el boleto creado
      res.status(201).json(boleto);
    } catch (error) {
      // Manejar cualquier error que ocurra durante el proceso
      console.error(error);
      next(new AppError("Error al crear boleto", 500));
    }
  }

  // Método para obtener todos los boletos
  static async obtenerBoletos(req, res, next) {
    try {
      // Llamar al método para obtener todos los boletos en la capa de acceso a datos
      const boletos = await BoletoDAO.obtenerBoletos();

      // Enviar la respuesta con los boletos obtenidos
      res.status(200).json(boletos);
    } catch (error) {
      // Manejar cualquier error que ocurra durante el proceso
      console.error(error);
      next(new AppError("Error al obtener boletos", 500));
    }
  }
}

// Exportar el controlador de boletos
module.exports = BoletoController;
