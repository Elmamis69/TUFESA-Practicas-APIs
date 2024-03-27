// Importar la librería mongoose para la definición de esquemas y modelos
const mongoose = require('mongoose');

// Definir el esquema para el modelo Boleto
const boletoSchema = new mongoose.Schema({
    // Definir el campo  "numero" como un número y obligatorio
    numero: {
        type: Number,
        required: true
    },
    // Definir el campo "nombre" como una cadena de texto y obligatorio
    nombre: {
        type: String,
        required: true
    },
    // Definir el campo "origen" como una cadena de texto y obligatorio
    origen: {
        type: String,
        required: true
    },
    // Definir el campo "destino" como una cadena de texto y obligatorio
    destino: {
        type: String,
        required: true
    },
    // Definir el campo "numeroAutobus" como una cadena de texto y obligatorio
    numeroAutobus: {
        type: String,
        required: true
    },
    // Definir el campo "numeroAsiento" como una cadena de texto y obligatorio
    numeroAsiento: {
        type: String,
        required: true
    },
    // Definir el campo "fechaViaje" como una fecha y obligatorio
    fechaViaje: {
        type: Date,
        required: true
    },
    // Definir el campo "servicio" como una cadena de texto y obligatorio
    servicio: {
        type: String,
        required: true
    },
    // Definir el campo "descuento" como un número y obligatorio
    descuento: {
        type: Number,
        required: true
    }
});

// Exportar el modelo Boleto basado en el esquema definido
module.exports = mongoose.model('Boleto', boletoSchema);
