const Client = require('../models/client')
const User = require('../models/user')
const Vehicle = require('../models/vehicle')

/** Obtener vehiculos */
function getDashboard(_, res) {

    Client.find((err, clients) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        User.find((err, users) => {
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
            
            Vehicle.find((err, vehicles) => {
                if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

                return res.status(201).send({clients: clients.length, users: users.length, vehicles: vehicles.length})
            })
        })

    })

}

module.exports = {

    getDashboard,

}