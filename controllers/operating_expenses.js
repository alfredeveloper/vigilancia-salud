const OperatingExpenses = require('../models/operating_expenses')

/** Obtener vehiculos */
function getOperatingExpensesArr(_, res) {

    OperatingExpenses.find((err, operatings) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(operatings)

    })

}

/** Obtener vehiculo */
function getOperatingExpenses(req, res) {

    OperatingExpenses.findOne({_id: req.params.id}, (err, operating)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(operating)

    })

}

/** Registrar vehiculo */
function saveOperatingExpenses(req, res) {

    let operatingExpenses = new OperatingExpenses(req.body)
    operatingExpenses.active = true
    operatingExpenses.save((err, operating) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(operating)
    })

}

/** Actualizar vehiculo */
function updateOperatingExpenses(req, res) {

    OperatingExpenses.findOne({_id: req.params.id}, (err, operating) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        operating.description = req.body.description
        operating.amount = req.body.amount
        
        operating.save();
        
        return res.status(201).send(operating)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteOperatingExpenses(req, res) {

    if(req.query.delete == 'true') {
        OperatingExpenses.deleteOne({_id: req.params.id}, (err, operating) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(201).send(operating)
        })
    } else {

        OperatingExpenses.findOne({_id: req.params.id}, (err, operating) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            operating.active = !operating.active
            operating.save()
    
    
            return res.status(201).send(operating)
        })
    
    }

}

module.exports = {

    getOperatingExpensesArr,
    getOperatingExpenses,
    saveOperatingExpenses,
    updateOperatingExpenses,
    deleteOperatingExpenses

}