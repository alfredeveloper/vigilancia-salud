const PaymentMethod = require('../models/payment_method')

/** Obtener vehiculos */
function getPaymentMethods(_, res) {

    PaymentMethod.find((err, paymentMethods) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(paymentMethods)

    })

}

/** Obtener vehiculo */
function getPaymentMethod(req, res) {

    PaymentMethod.findOne({_id: req.params.id}, (err, paymentMethod)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(paymentMethod)

    })

}

/** Registrar vehiculo */
function savePaymentMethod(req, res) {

    const paymentMethod = new PaymentMethod(req.body)
    paymentMethod.save((err, paymentMethod) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(paymentMethod)
    })

}

/** Actualizar vehiculo */
function updatePaymentMethod(req, res) {

    PaymentMethod.findOne({_id: req.params.id}, (err, paymentMethod) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        paymentMethod.name = req.body.name
        paymentMethod.description = req.body.description
        
        paymentMethod.save();
        
        return res.status(201).send(paymentMethod)

    })

}

/** Activacion / eliminacion vehiculo */
function deletePaymentMethod(req, res) {

    if(req.query.delete == 'true') {
        PaymentMethod.deleteOne({_id: req.params.id}, (err, paymentMethod) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(291).send(paymentMethod)
        })
    } else {

        PaymentMethod.findOne({_id: req.params.id}, (err, paymentMethod) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            paymentMethod.active = !paymentMethod.active
            paymentMethod.save()
    
    
            return res.status(201).send(paymentMethod)
        })
    
    }

}

module.exports = {

    getPaymentMethods,
    getPaymentMethod,
    savePaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod

}