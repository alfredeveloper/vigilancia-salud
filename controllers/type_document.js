const TypeDocument = require('../models/type_document')

/** Obtener vehiculos */
function getTypeDocuments(_, res) {

    TypeDocument.find((err, typeDocuments) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(typeDocuments)

    })

}

/** Obtener vehiculo */
function getTypeDocument(req, res) {

    TypeDocument.findOne({_id: req.params.id}, (err, typeDocument)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(typeDocument)

    })

}

/** Registrar vehiculo */
function saveTypeDocument(req, res) {

    const typeDocument = new TypeDocument(req.body)
    typeDocument.save((err, typeDocument) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(typeDocument)
    })

}

/** Actualizar vehiculo */
function updateTypeDocument(req, res) {

    TypeDocument.findOne({_id: req.params.id}, (err, typeDocument) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        typeDocument.name = req.body.name
        typeDocument.description = req.body.description
        
        typeDocument.save();
        
        return res.status(201).send(typeDocument)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteTypeDocument(req, res) {

    if(req.query.delete == 'true') {
        TypeDocument.deleteOne({_id: req.params.id}, (err, typeDocument) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(291).send(typeDocument)
        })
    } else {

        TypeDocument.findOne({_id: req.params.id}, (err, typeDocument) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            typeDocument.active = !typeDocument.active
            typeDocument.save()
    
    
            return res.status(201).send(typeDocument)
        })
    
    }

}

module.exports = {

    getTypeDocuments,
    getTypeDocument,
    saveTypeDocument,
    updateTypeDocument,
    deleteTypeDocument

}