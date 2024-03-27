// Importar el modelo de Boleto
const Boleto = require('../models/boleto');
 
// Definir la clase BoletoDAO
class BoletoDAO {
    constructor(){}

    // Método para crear un nuevo boleto en la base de datos
    async crear(boletoData) {
        try {
            // Crear una nueva instancia de Boleto con los datos proporcionados
            const boleto = new Boleto(boletoData);
            // Guardar el boleto en la base de datos
            return await boleto.save();
        } catch(error) {
            // Manejar cualquier error que ocurra durante la creación del boleto
            throw Error(error);
        }
    }

    // Método para obtener todos los boletos de la base de datos
    async obtenerBoletos(limit = 50) {
        try {
            // Obtener todos los boletos limitados por la cantidad especificada
            return await Boleto.find().limit(limit);
        } catch (error) {
            // Manejar cualquier error que ocurra durante la obtención de los boletos
            throw Error(error);
        }
    }

    // Método para obtener un boleto por su ID
    async obtenerBoletoPorId(boletoId) {
        try {
            // Buscar un boleto por su ID en la base de datos
            return await Boleto.findById(boletoId);
        } catch (error) {
            // Manejar cualquier error que ocurra durante la obtención del boleto
            throw Error(error);
        }
    }

    // Método para actualizar un boleto en la base de datos
    async actualizarBoleto(boletoId, nuevoBoletoData) {
        try {
            // Actualizar el boleto con el ID proporcionado con los nuevos datos
            return await Boleto.findByIdAndUpdate(boletoId, nuevoBoletoData, { new: true });
        } catch (error) {
            // Manejar cualquier error que ocurra durante la actualización del boleto
            throw Error(error);
        }
    }

    // Método para eliminar un boleto de la base de datos
    async eliminarBoleto(boletoId) {
        try {
            // Eliminar el boleto con el ID proporcionado de la base de datos
            return await Boleto.findByIdAndDelete(boletoId);
        } catch (error) {
            // Manejar cualquier error que ocurra durante la eliminación del boleto
            throw Error(error);
        }
    }
}

// Exportar una instancia de la clase BoletoDAO
module.exports = new BoletoDAO();
