<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
=======
const app = require('./express')
>>>>>>> master
const routerFila = require('./routes')  
const bodyParser = require('body-parser')

const port = 3333

<<<<<<< HEAD
const app = express()

mongoose.connect(
    'mongodb+srv://Matheus:Matheus@inline-ami3p.mongodb.net/Inline?retryWrites=true&w=majority',
    {useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology: true}
)

app.use(bodyParser.json())

app.use('/api', routerFila)
=======

app.use(bodyParser.json())
app.use('/api/fila', routerFila)

>>>>>>> master

app.listen(port, () => {
    console.log(`Api initilize success in port ${port}`)
});