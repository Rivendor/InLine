const filaSchema = require('./fila-schema');

const all = async (_, res) =>{
    return res.json(
        await filaSchema.find()
    )
}

const findById = async (req, res) => {
    const { id } = req.params
    const model = await filaSchema.findById(id)
    if(!model)
        return res.status(404).send('fila nao foi encontrada')
    else
        return res.json(model)
}

const save = async (req, res) => {
    const { id } = req.params
    const{ body } = req

    if(id){
        await filaSchema.updateOne({ _id: id }, { $set: body })
        const updated = await filaSchema.findById(id)
        return res.status(202).send(updated)
    }else{
        const fila = new filaSchema(body)
        await fila.save()
        return res.status(201).send(fila)
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    return res.status(204).send(
        await filaSchema.deleteOne({ _id: id })
    )
    
}

module.exports = {
    all,
    findById,
    save,
    remove
}