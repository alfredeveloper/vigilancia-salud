const TypeDocument = require('../models/type_document')

function index(_, res) {
    TypeDocument.find((err, types) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
        
        return res.status(200).send({message: 'Listado de tipos de documento', data: types, status: true})
        
    })
}

function show(req, res) {
    TypeDocument.findById(req.params.id, (err, type) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
        
        return res.status(200).send({message: 'Tipo de documento encontrado', data: type, status: true})
        
    })
}

function save(req, res) {
    const type = new TypeDocument(req.body)

    type.save((err, type) => {
        
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(200).send({message: 'Tipo de documento creado', data: type, status: true})
        
    })
}

function update(req, res) {
    TypeDocument.findById(req.params.id, (err, type) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        if(req.body.type) {
            type.type = req.body.type
        }

        if(req.body.name) {
            type.name = req.body.name
        }

        if(req.body.description) {
            type.description = req.body.description
        }

        type.save()

        return res.status(200).send({message: `Tipo de documento actualizado`, data: type, status: true})

    })
}

function remove(req, res) {
    TypeDocument.findById(req.params.id, (err, type) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        if(!type) return res.status(404).send({message: 'No se encontro el tipo de documento', status: false})

        type.remove()

        return res.status(200).send({message: 'Tipo de documento eliminado', status: true, data: type})
    })
}

module.exports = {
    index,
    show,
    save,
    update,
    remove
}