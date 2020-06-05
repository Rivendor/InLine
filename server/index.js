const app = require('./express')
const routerFila = require('./routes')  
const bodyParser = require('body-parser')

const port = 3333


app.use(bodyParser.json())
app.use('/api/fila', routerFila)


app.listen(port, () => {
    console.log(`Api initilize success in port ${port}`)
});