const Service = require('../models/service')

/** Obtener vehiculos */
function getServices(_, res) {

    Service.find((err, services) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(services)

    })

}

/** Obtener vehiculo */
function getService(req, res) {

    Service.findOne({_id: req.params.id}, (err, service)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(service)

    })

}

/** Registrar vehiculo */
function saveService(req, res) {

    const service = new Service(req.body)
    service.save((err, service) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(service)
    })

}

/** Actualizar vehiculo */
function updateService(req, res) {

    Service.findOne({_id: req.params.id}, (err, service) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        service.name = req.body.name
        service.description = req.body.description
        service.price = req.body.price
        
        service.save();
        
        return res.status(201).send(service)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteService(req, res) {

    if(req.query.delete == 'true') {
        Service.deleteOne({_id: req.params.id}, (err, service) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(291).send(service)
        })
    } else {

        Service.findOne({_id: req.params.id}, (err, service) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            service.active = !service.active
            service.save()
    
    
            return res.status(201).send(service)
        })
    
    }

}

module.exports = {

    getServices,
    getService,
    saveService,
    updateService,
    deleteService

}