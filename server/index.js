const express = require('express');
const mongoose = require('mongoose');
const routerFila = require('./routes')  
const bodyParser = require('body-parser')

const port = 3333

const app = express()

mongoose.connect(
    'mongodb+srv://Matheus:Matheus@inline-ami3p.mongodb.net/Inline?retryWrites=true&w=majority',
    {useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology: true}
)

app.use(bodyParser.json())

app.use('/api', routerFila)

app.listen(port, () => {
    console.log(`Api initilize success in port ${port}`)
});