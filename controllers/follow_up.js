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

        if(followUp.seguimiento_pot) {
            followUp.seguimiento_pot = req.body.seguimiento_pot;
        }

        if(req.body.pa) {
            followUp.pa = req.body.pa;
        }

        if(req.body.cough) {
            followUp.cough = req.body.cough;
        }

        if(req.body.fc) {
            followUp.fc = req.body.fc;
        }

        if(req.body.fr) {
            followUp.fr = req.body.fr;
        }

        if(req.body.temperatura) {
            followUp.temperatura = req.body.temperatura;
        }

        if(req.body.pulsioximetria) {
            followUp.pulsioximetria = req.body.pulsioximetria;
        }

        if(req.body.tos) {
            followUp.tos = req.body.tos;
        }

        if(req.body.dolor_garganta) {
            followUp.dolor_garganta = req.body.dolor_garganta;
        }

        if(req.body.congestion_nasal) {
            followUp.congestion_nasal = req.body.congestion_nasal;
        }

        if(req.body.fiebre) {
            followUp.fiebre = req.body.fiebre;
        }

        if(req.body.malestar_general) {
            followUp.malestar_general = req.body.malestar_general;
        }

        if(req.body.dificultad_respiratoria) {
            followUp.dificultad_respiratoria = req.body.dificultad_respiratoria;
        }

        if(req.body.diarrea) {
            followUp.diarrea = req.body.diarrea;
        }

        if(req.body.nausea_vomito) {
            followUp.nausea_vomito = req.body.nausea_vomito;
        }

        if(req.body.cefalea) {
            followUp.cefalea = req.body.cefalea;
        }

        if(req.body.irritabilidad_confusion) {
            followUp.irritabilidad_confusion = req.body.irritabilidad_confusion;
        }

        if(req.body.dolor_muscular) {
            followUp.dolor_muscular = req.body.dolor_muscular;
        }

        if(req.body.dolor_abdominal) {
            followUp.dolor_abdominal = req.body.dolor_abdominal;
        }

        if(req.body.dolor_pecho) {
            followUp.dolor_pecho = req.body.dolor_pecho;
        }

        if(req.body.dolor_articulaciones) {
            followUp.dolor_articulaciones = req.body.dolor_articulaciones;
        }

        if(req.body.otro_signo_sintoma) {
            followUp.otro_signo_sintoma = req.body.otro_signo_sintoma;
        }

        if(req.body.disnea) {
            followUp.disnea = req.body.disnea;
        }

        if(req.body.taquipnea) {
            followUp.taquipnea = req.body.taquipnea;
        }

        if(req.body.saturacion_oxigeno) {
            followUp.saturacion_oxigeno = req.body.saturacion_oxigeno;
        }

        if(req.body.alteracion_conciencia) {
            followUp.alteracion_conciencia = req.body.alteracion_conciencia;
        }

        if(req.body.fosfato_cloroquina) {
            followUp.fosfato_cloroquina = req.body.fosfato_cloroquina;
        }

        if(req.body.hidorxicloroquina) {
            followUp.hidorxicloroquina = req.body.hidorxicloroquina;
        }

        if(req.body.azitromicina) {
            followUp.azitromicina = req.body.azitromicina;
        }

        if(req.body.otro_tratamiento_especifico) {
            followUp.otro_tratamiento_especifico = req.body.otro_tratamiento_especifico;
        }

        if(req.body.antibiotico) {
            followUp.antibiotico = req.body.antibiotico;
        }

        if(req.body.antiviral) {
            followUp.antiviral = req.body.antiviral;
        }

        if(req.body.onoxapirina) {
            followUp.onoxapirina = req.body.onoxapirina;
        }

        if(req.body.otro_anticoagulatorio) {
            followUp.otro_anticoagulatorio = req.body.otro_anticoagulatorio;
        }

        if(req.body.especificar_medicamento) {
            followUp.especificar_medicamento = req.body.especificar_medicamento;
        }

        if(req.body.estado_evolucion) {
            followUp.estado_evolucion = req.body.estado_evolucion;
        }

        if(req.body.condicion_egreso) {
            followUp.condicion_egreso = req.body.condicion_egreso;
        }

        if(req.body.patient) {
            followUp.patient = req.body.patient;
        }

        if(req.body.date) {
            followUp.date = req.body.date;
        }

        followUp.save();

        return res.status(201).send({message: `Seguimiento registrado`, status: true, data: followUp});
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