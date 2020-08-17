const Configuration = require('../models/configuration')

/** Obtener vehiculos */
function getConfigurations(_, res) {

    Configuration.find((err, configurations) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(configurations)

    })

}

/** Obtener vehiculo */
function getConfiguration(req, res) {

    Configuration.findOne({_id: req.params.id}, (err, configuration)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(configuration)

    })

}

/** Registrar vehiculo */
function saveConfiguration(req, res) {

    const configuration = new Configuration(req.body)
    configuration.save((err, configuration) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(configuration)
    })

}

/** Actualizar vehiculo */
function updateConfiguration(req, res) {

    Configuration.findOne({_id: req.params.id}, (err, configuration) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        configuration.business_name = req.body.business_name
        configuration.ruc = req.body.ruc
        configuration.trade_name = req.body.trade_name
        configuration.fiscal_address = req.body.fiscal_address
        
        configuration.save();
        
        return res.status(201).send(configuration)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteConfiguration(req, res) {

    if(req.query.delete == 'true') {
        Configuration.deleteOne({_id: req.params.id}, (err, configuration) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(500).send(configuration)
        })
    } else {

        Configuration.findOne({_id: req.params.id}, (err, configuration) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            configuration.active = !configuration.active
            configuration.save()
    
    
            return res.status(201).send(configuration)
        })
    
    }

}

module.exports = {

    getConfigurations,
    getConfiguration,
    saveConfiguration,
    updateConfiguration,
    deleteConfiguration

}