const Client = require('../models/client')
const Natural = require('../models/natural')
const Juridical = require('../models/juridical')

/** Obtener todos los clientes */
function getClients(_, res) {

    Natural.find().populate('client').exec((err, naturals) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        Juridical.find().populate('client').exec((err, juridicals) => {
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

            return res.status(201).send(naturals.concat(juridicals))

        })

    })

}


/** Obtener vehiculos */
function getNaturals(_, res) {

    Natural.find().populate('client').exec((err, naturals) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(naturals)

    })

}

/** Obtener vehiculo */
function getNatural(req, res) {

    Natural.findOne({client: req.params.id}).populate('client').exec((err, natural)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(natural)

    })

}

/** Registrar vehiculo */
function saveNatural(req, res) {
    
    const client = new Client(req.body)

    client.save((err, client) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        let data = {
            name: req.body.name,
            lastname: req.body.lastname,
            gender: req.body.gender,
            birthday: req.body.birthday,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            ubication: req.body.ubication,
            active: true,
            client: client._id,
        }
        
        const natural = new Natural(data)

        natural.save((err, natural) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
    
            return res.status(201).send({client, natural})
        })


    })


}

/** Actualizar vehiculo */
function updateNatural(req, res) {

    Client.findOne({_id: req.params.id}, (err, client) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        client.type = req.body.type;
        client.type_document = req.body.type_document
        client.document = req.body.document

        client.save()
        
        Natural.findOne({client: req.params.id}, (err, natural) => {

            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

            natural.name = req.body.name
            natural.lastname = req.body.lastname
            natural.gender = req.body.gender
            natural.birthday = req.body.birthday
            natural.address = req.body.address
            natural.phone = req.body.phone
            natural.email = req.body.email
            natural.ubication = req.body.ubication

            natural.save()

            return res.status(201).send({client, natural})
        })
    })

}

/** Activacion / eliminacion vehiculo */
function deleteNatural(req, res) {

    if(req.query.delete == 'true') {
        Natural.deleteOne({client: req.params.id}, (err, natural) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            Client.deleteOne({_id: req.params.id}, (err, client) => {
    
                if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

                return res.status(201).send({client, natural})

            })
        })
    } else {

        Natural.findOne({client: req.params.id}, (err, natural) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            natural.active = !natural.active
            natural.save()
    
    
            return res.status(201).send(natural)
        })
    
    }

}


/** Obtener vehiculos */
function getJuridicals(_, res) {

    Juridical.find().populate('client').exec((err, juridicals) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(juridicals)

    })

}

/** Obtener vehiculo */
function getJuridical(req, res) {

    Juridical.findOne({client: req.params.id}).populate('client').exec((err, juridical)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(juridical)

    })

}

/** Registrar vehiculo */
function saveJuridical(req, res) {
    
    const client = new Client(req.body)

    client.save((err, client) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        let data = {
            fiscal_address: req.body.fiscal_address,
            phone: req.body.phone,
            email: req.body.email,
            ubication: req.body.ubication,
            active: true,
            client: client._id,
        }

        const juridical = new Juridical(data)

        juridical.save((err, juridical) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
    
            return res.status(201).send({client, juridical})
        })


    })


}

/** Actualizar vehiculo */
function updateJuridical(req, res) {

    Client.findOne({_id: req.params.id}, (err, client) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        client.type = req.body.type;
        client.type_document = req.body.type_document;
        client.document = req.body.document;

        client.save()
        
        Juridical.findOne({client: req.params.id}, (err, juridical) => {

            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

            juridical.fiscal_address = req.body.fiscal_address
            juridical.name = req.body.name
            juridical.phone = req.body.phone
            juridical.email = req.body.email
            juridical.ubication = req.body.ubication

            juridical.save()

            return res.status(201).send({client, juridical})
        })
    })

}

/** Activacion / eliminacion vehiculo */
function deleteJuridical(req, res) {

    if(req.query.delete == 'true') {
        Juridical.deleteOne({client: req.params.id}, (err, juridical) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            Client.deleteOne({_id: req.params.id}, (err, client) => {
    
                if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

                return res.status(201).send({client, juridical})

            })
        })
    } else {

        Juridical.findOne({client: req.params.id}, (err, juridical) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            juridical.active = !juridical.active
            juridical.save()
    
    
            return res.status(201).send(juridical)
        })
    
    }

}

module.exports = {
    
    getClients,
    getNaturals,
    getNatural,
    saveNatural,
    updateNatural,
    deleteNatural,
    getJuridicals,
    getJuridical,
    saveJuridical,
    updateJuridical,
    deleteJuridical

}