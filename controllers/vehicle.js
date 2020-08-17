const Vehicle = require('../models/vehicle')

/** Obtener vehiculos */
function getVehicles(req, res) {

    Vehicle.find((err, vehicles) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(vehicles)

    })

}

/** Obtener vehiculo */
function getVehicle(req, res) {

    Vehicle.findOne({_id: req.params.id}, (err, vehicle)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(vehicle)

    })

}

/** Registrar vehiculo */
function saveVehicle(req, res) {

    const vehicle = new Vehicle(req.body)
    vehicle.save((err, vehicle) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(vehicle)
    })

}

/** Actualizar vehiculo */
function updateVehicle(req, res) {

    Vehicle.findOne({_id: req.params.id}, (err, vehicle) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        vehicle.model = req.body.model
        vehicle.plete = req.body.plete
        vehicle.brand = req.body.brand
        vehicle.color = req.body.color
        
        vehicle.save();
        
        return res.status(201).send(vehicle)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteVehicle(req, res) {

    if(req.query.delete == 'true') {
        Vehicle.deleteOne({_id: req.params.id}, (err, vehicle) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(201).send(vehicle)
        })
    } else {

        Vehicle.findOne({_id: req.params.id}, (err, vehicle) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            vehicle.active = !vehicle.active
            vehicle.save()
    
    
            return res.status(201).send(vehicle)
        })
    
    }

}

module.exports = {

    getVehicles,
    getVehicle,
    saveVehicle,
    updateVehicle,
    deleteVehicle

}