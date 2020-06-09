const mongoose = require('mongoose')

const filaSchema = mongoose.Schema({
    /*isActive: {
        type: Boolean,
        require:true
    },*/
    nomeFila: {
        type: String,
        require:true
    },
    senhaFila: {
        type: String,
        require: true,
    },
    inicioFila: {
        type: Date,
        require:true
    },
    qtdPessoas: {
        type: Number,
        require: true
    },
    finalFila: {
        type: Date,
    },
    pico: {
        type: Date,
    },
    pessoas: {
        pos: {
            type: String,
            require: true
        },
        nome: {
            type: String,
            require: true
        },
        horaChegada: {
            type: Date,
            require:true
        },
        foiAtendida: {
            type: Boolean,
            require:true
        },
        horaSaida: Date,
        posicao: {
            type: Number,
            require: true

        }   
    }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });

filaSchema.index({nomeFila: 1, senhaFila: 1, inicioFila: 1, qtdPessoas: 0})

module.exports = mongoose.model('Fila', filaSchema);
