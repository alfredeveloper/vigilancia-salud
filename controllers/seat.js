const Seat = require('../models/seat')

/** Obtener vehiculos */
function getSeats(_, res) {

    Seat.find((err, seats) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(seats)

    })

}

/** Obtener vehiculo */
function getSeat(req, res) {

    Seat.findOne({_id: req.params.id}, (err, seat)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(seat)

    })

}

/** Registrar vehiculo */
function saveSeat(req, res) {

    const seat = new Seat(req.body)
    seat.save((err, seat) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(seat)
    })

}

/** Actualizar vehiculo */
function updateSeat(req, res) {

    Seat.findOne({_id: req.params.id}, (err, seat) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        seat.name = req.body.name
        seat.description = req.body.description
        seat.ubigeo = req.body.ubigeo
        
        seat.save();
        
        return res.status(201).send(seat)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteSeat(req, res) {

    if(req.query.delete == 'true') {
        Seat.deleteOne({_id: req.params.id}, (err, seat) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(201).send(seat)
        })
    } else {

        Seat.findOne({_id: req.params.id}, (err, seat) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            seat.active = !seat.active
            seat.save()
    
    
            return res.status(201).send(seat)
        })
    
    }

}

module.exports = {

    getSeats,
    getSeat,
    saveSeat,
    updateSeat,
    deleteSeat

}