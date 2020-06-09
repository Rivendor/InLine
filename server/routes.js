const express = require('express');
const router = express.Router();
const { all, findById, save, remove } = require('./fila-controller');

router.get('/lista_filas', all)

router.get('/fila/:id', findById)

router.post('/cria_fila', save)

router.put('/atualiza_fila/:id', save)

router.delete('/apaga_fila/:id', remove)

module.exports = router
