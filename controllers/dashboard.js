const Patient = require('../models/patient');
const User = require('../models/user');
const ClinicalFollowUp = require('../models/clinical_follow_up');

/** Obtener vehiculos */
function getDashboard(_, res) {

    Patient.find((err, patients) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        User.find((err, users) => {
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
            
            ClinicalFollowUp.find((err, follows) => {
                if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

                return res.status(201).send({patients: patients.length, users: users.length, follows: follows.length})
            })
        })

    })

}

module.exports = {

    getDashboard,

}