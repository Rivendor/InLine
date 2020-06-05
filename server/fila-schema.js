const mongoose = require('mongoose')


const filaSchema = mongoose.Schema({
    isActive: {
        type: Boolean,
        require:true
    },
    nomeFila: {
        type: String,
        require:true
    },
    inicioFila: {
        type: Date,
        require:true
    },
    publico: {
        type: Number,
        require: true
    },
    finalFila: Date,
    pico: Date,
   
    pessoas:{
        nome:{
            type: String,
            require: true
        },
        horaChegada:{
            type: Date,
            require:true
        },
        foiAtendida:{
            type: Boolean,
            require:true
        },
        horaSaida: Date,
        posicao:{
            type: Number,
            require: true

        }       
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }

});

filaSchema.index({nomeFila: 1, inicioFila: 1, publico: 1})

module.exports = mongoose.model('Fila', filaSchema);