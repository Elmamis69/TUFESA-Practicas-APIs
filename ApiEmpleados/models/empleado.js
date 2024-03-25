const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    // Definir _id como ObjectId y establecerlo como obligatorio
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: mongoose.Types.ObjectId // Generar automáticamente un ObjectId si no se proporciona
    },
    numero:{
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true,
        // Validación para garantizar que el campo "correo" contenga una dirección de correo electrónico válida.
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Por favor, introduce un correo electrónico válido']
    },
    RFC: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Empleado', empleadoSchema);
