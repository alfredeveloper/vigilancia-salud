const TypeCharge = require('../models/type_charge')

/** Obtener vehiculos */
function getTypeCharges(_, res) {

    TypeCharge.find((err, typeCharges) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(typeCharges)

    })

}

/** Obtener vehiculo */
function getTypeCharge(req, res) {

    TypeCharge.findOne({_id: req.params.id}, (err, typeCharge)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(typeCharge)

    })

}

/** Registrar vehiculo */
function saveTypeCharge(req, res) {

    const typeCharge = new TypeCharge(req.body)
    typeCharge.save((err, typeCharge) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(typeCharge)
    })

}

/** Actualizar vehiculo */
function updateTypeCharge(req, res) {

    TypeCharge.findOne({_id: req.params.id}, (err, typeCharge) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        typeCharge.name = req.body.name
        typeCharge.description = req.body.description
        
        typeCharge.save();
        
        return res.status(201).send(typeCharge)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteTypeCharge(req, res) {

    if(req.query.delete == 'true') {
        TypeCharge.deleteOne({_id: req.params.id}, (err, typeCharge) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(291).send(typeCharge)
        })
    } else {

        TypeCharge.findOne({_id: req.params.id}, (err, typeCharge) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            typeCharge.active = !typeCharge.active
            typeCharge.save()
    
    
            return res.status(201).send(typeCharge)
        })
    
    }

}

module.exports = {

    getTypeCharges,
    getTypeCharge,
    saveTypeCharge,
    updateTypeCharge,
    deleteTypeCharge

}