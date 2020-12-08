const Result = require('../models/result')

function getAutodiagnoses(_, res) {
    Result.find({type: 'AUTODIAGNOSTICO'}, (err, results) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(200).send({data: results, message: `Listado de Autodiagnosticos`, status: true})

    })
}

function saveAutodiagnoses(req, res) {
    
    const result = new Result(req.body);

    result.save((err, response) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: 500})

        return res.status(200).send({message: `Autodiagnostico registrado`, data: response, status: true})
    })
}

function getSwornDeclarations(_, res) {
    Result.find({type: 'DECLARACION_JURADA'}, (err, results) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(200).send({data: results, message: `Listado de declaraciones juradas`, status: true})

    })
}

function saveSwornDeclaration(req, res) {

    const result = new Result(req.body);

    result.save((err, response) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(200).send({message: `Declaración Jurada registrada`, data: response, status: true})

    })
}

module.exports = {
    
    getAutodiagnoses,
    saveAutodiagnoses,
    getSwornDeclarations,
    saveSwornDeclaration
    
}