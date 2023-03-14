const { Schema, model } = require('mongoose')

const FileSchema = Schema({
    modelo: {
        required: true,
        type: String
    },
    fabricante: {
        required: true,
        type:String
    },
    precio: {
        type: Number,
        required: true
    },
    rutaImg: {
        type: String,
        required: true
    },
    asignadoA: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    tock: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
})

module.exports = model('File', FileSchema)