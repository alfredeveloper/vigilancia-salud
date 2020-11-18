const ClinicalFollowUp = require('../models/clinical_follow_up');

function registerFollowUp(req, res) {
    const followUp = new ClinicalFollowUp(req.body);

    followUp.save((err, follow) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        return res.status(201).send({message: 'Seguimiento registrado', status: true, data: follow});
    })
}

function updateFollowUp(req, res) {

    ClinicalFollowUp.findOne({_id: req.params.id}, (err, followUp) => {

        if(err) return res.status(201).send({message: `Error en el servidro ${err}`, status: false});

        if(followUp.temperature) {
            followUp.temperature = req.body.temperature;
        }

        if(followUp.chills_sweating) {
            followUp.chills_sweating = req.body.chills_sweating;
        }

        if(followUp.cough) {
            followUp.cough = req.body.cough;
        }

        if(followUp.sore_throat) {
            followUp.sore_throat = req.body.sore_throat;
        }

        if(followUp.chest_pain) {
            followUp.chest_pain = req.body.chest_pain;
        }

        if(followUp.anosmia) {
            followUp.anosmia = req.body.anosmia;
        }

        if(followUp.dysgeusia) {
            followUp.dysgeusia = req.body.dysgeusia;
        }

        if(followUp.nasal_congestion) {
            followUp.nasal_congestion = req.body.nasal_congestion;
        }

        if(followUp.general_discomfort) {
            followUp.general_discomfort = req.body.general_discomfort;
        }

        if(followUp.difficulty_breathing) {
            followUp.difficulty_breathing = req.body.difficulty_breathing;
        }

        if(followUp.diarrhea) {
            followUp.diarrhea = req.body.diarrhea;
        }

        if(followUp.vomits) {
            followUp.vomits = req.body.vomits;
        }

        if(followUp.headache) {
            followUp.headache = req.body.headache;
        }

        if(followUp.disorientation) {
            followUp.disorientation = req.body.disorientation;
        }

        if(followUp.cyanosis) {
            followUp.cyanosis = req.body.cyanosis;
        }

        if(followUp.serological_diagnostic_test) {
            followUp.serological_diagnostic_test = req.body.serological_diagnostic_test;
        }

        if(followUp.case_follow_up) {
            followUp.case_follow_up = req.body.case_follow_up;
        }

        if(followUp.recovered) {
            followUp.recovered = req.body.recovered;
        }

        if(followUp.transfer_to_hospital) {
            followUp.transfer_to_hospital = req.body.transfer_to_hospital;
        }

        if(followUp.passed_away) {
            followUp.passed_away = req.body.passed_away;
        }

        if(followUp.patient) {
            followUp.patient = req.body.patient;
        }

        followUp.save();

        return res.status(201).send({message: `Error en el servidor ${err}`, status: true, data: followUp});
    });

}

function getFollowsByPatient(req, res) {
    ClinicalFollowUp.find({patient: req.params.id}, (err, patients) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        return res.status(201).send({message: `Seguimientos encontrados`, status: true, data: patients});
    })
}

module.exports = {
    
    registerFollowUp,
    updateFollowUp,
    getFollowsByPatient

}