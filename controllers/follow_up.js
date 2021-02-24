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

        if(followUp.pa) {
            followUp.pa = req.body.pa;
        }

        if(followUp.cough) {
            followUp.cough = req.body.cough;
        }

        if(followUp.fc) {
            followUp.fc = req.body.fc;
        }

        if(followUp.fr) {
            followUp.fr = req.body.fr;
        }

        if(followUp.temperatura) {
            followUp.temperatura = req.body.temperatura;
        }

        if(followUp.pulsioximetria) {
            followUp.pulsioximetria = req.body.pulsioximetria;
        }

        if(followUp.tos) {
            followUp.tos = req.body.tos;
        }

        if(followUp.dolor_garganta) {
            followUp.dolor_garganta = req.body.dolor_garganta;
        }

        if(followUp.congestion_nasal) {
            followUp.congestion_nasal = req.body.congestion_nasal;
        }

        if(followUp.fiebre) {
            followUp.fiebre = req.body.fiebre;
        }

        if(followUp.malestar_general) {
            followUp.malestar_general = req.body.malestar_general;
        }

        if(followUp.dificultad_respiratoria) {
            followUp.dificultad_respiratoria = req.body.dificultad_respiratoria;
        }

        if(followUp.diarrea) {
            followUp.diarrea = req.body.diarrea;
        }

        if(followUp.nausea_vomito) {
            followUp.nausea_vomito = req.body.nausea_vomito;
        }

        if(followUp.cefalea) {
            followUp.cefalea = req.body.cefalea;
        }

        if(followUp.irritabilidad_confusion) {
            followUp.irritabilidad_confusion = req.body.irritabilidad_confusion;
        }

        if(followUp.dolor_muscular) {
            followUp.dolor_muscular = req.body.dolor_muscular;
        }

        if(followUp.dolor_abdominal) {
            followUp.dolor_abdominal = req.body.dolor_abdominal;
        }

        if(followUp.dolor_pecho) {
            followUp.dolor_pecho = req.body.dolor_pecho;
        }

        if(followUp.dolor_articulaciones) {
            followUp.dolor_articulaciones = req.body.dolor_articulaciones;
        }

        if(followUp.otro_signo_sintoma) {
            followUp.otro_signo_sintoma = req.body.otro_signo_sintoma;
        }

        if(followUp.disnea) {
            followUp.disnea = req.body.disnea;
        }

        if(followUp.taquipnea) {
            followUp.taquipnea = req.body.taquipnea;
        }

        if(followUp.saturacion_oxigeno) {
            followUp.saturacion_oxigeno = req.body.saturacion_oxigeno;
        }

        if(followUp.alteracion_conciencia) {
            followUp.alteracion_conciencia = req.body.alteracion_conciencia;
        }

        if(followUp.fosfato_cloroquina) {
            followUp.fosfato_cloroquina = req.body.fosfato_cloroquina;
        }

        if(followUp.hidorxicloroquina) {
            followUp.hidorxicloroquina = req.body.hidorxicloroquina;
        }

        if(followUp.azitromicina) {
            followUp.azitromicina = req.body.azitromicina;
        }

        if(followUp.otro_tratamiento_especifico) {
            followUp.otro_tratamiento_especifico = req.body.otro_tratamiento_especifico;
        }

        if(followUp.antibiotico) {
            followUp.antibiotico = req.body.antibiotico;
        }

        if(followUp.antiviral) {
            followUp.antiviral = req.body.antiviral;
        }

        if(followUp.onoxapirina) {
            followUp.onoxapirina = req.body.onoxapirina;
        }

        if(followUp.otro_anticoagulatorio) {
            followUp.otro_anticoagulatorio = req.body.otro_anticoagulatorio;
        }

        if(followUp.especificar_medicamento) {
            followUp.especificar_medicamento = req.body.especificar_medicamento;
        }

        if(followUp.estado_evolucion) {
            followUp.estado_evolucion = req.body.estado_evolucion;
        }

        if(followUp.condicion_egreso) {
            followUp.condicion_egreso = req.body.condicion_egreso;
        }

        if(followUp.patient) {
            followUp.patient = req.body.patient;
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