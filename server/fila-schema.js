const mongoose = require('mongoose')

<<<<<<< HEAD
const filaSchema = mongoose.Schema({
    /*isActive: {
        type: Boolean,
        require:true
    },*/
=======

const filaSchema = mongoose.Schema({
    isActive: {
        type: Boolean,
        require:true
    },
>>>>>>> master
    nomeFila: {
        type: String,
        require:true
    },
<<<<<<< HEAD
    senhaFila: {
        type: String,
        require: true,
    },
=======
>>>>>>> master
    inicioFila: {
        type: Date,
        require:true
    },
<<<<<<< HEAD
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
    /*pessoas: {
        nome: {
            type: String,
            require: true
        },
        horaChegada: {
            type: Date,
            require:true
        },
        foiAtendida: {
=======
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
>>>>>>> master
            type: Boolean,
            require:true
        },
        horaSaida: Date,
<<<<<<< HEAD
        posicao: {
=======
        posicao:{
>>>>>>> master
            type: Number,
            require: true

        }       
<<<<<<< HEAD
    }*/
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });

filaSchema.index({nomeFila: 1, senhaFila: 1, inicioFila: 1, qtdPessoas: 1})
=======
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }

});

filaSchema.index({nomeFila: 1, inicioFila: 1, publico: 1})
>>>>>>> master

module.exports = mongoose.model('Fila', filaSchema);