const PaymentModality = require('../models/payment_modality')

/** Obtener vehiculos */
function getPaymentModalities(_, res) {

    PaymentModality.find((err, paymentModalities) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(paymentModalities)

    })

}

/** Obtener vehiculo */
function getPaymentModality(req, res) {

    PaymentModality.findOne({_id: req.params.id}, (err, paymentModality)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(paymentModality)

    })

}

/** Registrar vehiculo */
function savePaymentModality(req, res) {

    const paymentModality = new PaymentModality(req.body)
    paymentModality.save((err, paymentModality) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(paymentModality)
    })

}

/** Actualizar vehiculo */
function updatePaymentModality(req, res) {

    PaymentModality.findOne({_id: req.params.id}, (err, paymentModality) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        paymentModality.concept = req.body.concept
        paymentModality.description = req.body.description
        
        paymentModality.save();
        
        return res.status(201).send(paymentModality)

    })

}

/** Activacion / eliminacion vehiculo */
function deletePaymentModality(req, res) {

    if(req.query.delete == 'true') {
        PaymentModality.deleteOne({_id: req.params.id}, (err, paymentModality) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(291).send(paymentModality)
        })
    } else {

        PaymentModality.findOne({_id: req.params.id}, (err, paymentModality) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            paymentModality.active = !paymentModality.active
            paymentModality.save()
    
    
            return res.status(201).send(paymentModality)
        })
    
    }

}

module.exports = {

    getPaymentModalities,
    getPaymentModality,
    savePaymentModality,
    updatePaymentModality,
    deletePaymentModality

}