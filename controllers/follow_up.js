const ClinicalFollowUp = require('../models/clinical_follow_up');
const Patient = require('../models/patient');

function registerFollowUp(req, res) {
    const followUp = new ClinicalFollowUp(req.body);

    followUp.save((err, follow) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});
        
        Patient.findById(follow.patient, (err, patient) => {
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});
            
            patient.confirmation = req.body.confirmation;
            patient.save();

            return res.status(201).send({message: 'Seguimiento registrado', status: true, data: follow});
        })
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

        if(req.body.confirmation) {
            followUp.confirmation = req.body.confirmation;
        }

        if(req.body.confirmation_code) {
            followUp.confirmation_code = req.body.confirmation_code;
        }
        
        followUp.save();

        if(req.body.confirmation) {
            Patient.findById(followUp.patient, (err, patient) => {
                if(err) return res.status(201).send({message: `Error en el servidro ${err}`, status: false});
                
                patient.confirmation = req.body.confirmation;
                patient.save();

                return res.status(201).send({message: `Seguimiento registrado`, status: true, data: followUp});

            })
        } else {
            return res.status(201).send({message: `Seguimiento registrado`, status: true, data: followUp});
        }

    });

}

function getFollowsByPatient(req, res) {
    Patient.findById(req.params.id, (err, patient) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        ClinicalFollowUp.find({patient: req.params.id}, (err, follows) => {
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});
            
            let data2 = [{0: 'PA'}, {0: 'FC'}, {0: 'FR'}, {0: 'TEMPERATURA'}, {0: 'PULSIOXIMETRIA'},{0: 'TOS'}, {0: 'DOLOR DE GARGANTA'}, {0: 'CONGESTION NASAL'}, {0: 'FIEBRE'}, {0: 'MALESTAR GENERAL'},{0: 'DIFICULTAD RESPIRATORIA'}, {0: 'DIARREA'}, {0: 'NAUSEA / VOMITO'}, {0: 'CEFALEA'}, {0: 'IRRITABILIDAD / CONFUSION'},{0: 'DOLOR MUSCULAR'}, {0: 'DOLOR ABDOMINAL'}, {0: 'DOLOR DE PECHO'}, {0: 'DOLOR EN ARTICULACIONES'}, {0: 'OTRO'},{0: 'DISNEA'}, {0: 'TAQUIPNEA (>= 22 PM)'}, {0: 'SATURACIÓN DE OXIGENO < 92%'}, {0: 'ALTERACIÓN DE LA CONCIENCIA'}, {0: 'FOSFATO DE CLORIQUINA'},{0: 'HIDORXICLOROQUINA'}, {0: 'HIDORXICLOROQUINA + AZITROMICINA'}, {0: 'OTRO'}, {0: 'ANTIBIÓTICO (especificar)'}, {0: 'ANTIVIRAL (especificar)'},{0: 'ENOXAPARIMA mg'}, {0: 'OTRO (especificar)'}, {0: 'ESPECIFICAR MEDICAMENTO'}, {0: 'ESTADO'}];
            let headers = ['Indicadores'];

            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                headers.push(element.created_at)
            }

            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[0][`${index+1}`] = element['pa'];
            }

            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[1][index+1] = element['fc'];
            }

            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[2][index+1] = element['fr'];
            }

            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[3][index+1] = element['temperatura'];
            }

            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[4][index+1] = element['pulsioximetria'];
            }

            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[5][index+1] = element['tos'];
            }
            
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[6][index+1] = element['dolor_garganta'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[7][index+1] = element['congestion_nasal'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[8][index+1] = element['fiebre'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[9][index+1] = element['malestar_general'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[10][index+1] = element['dificultad_respiratoria'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[11][index+1] = element['diarrea'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[12][index+1] = element['nausea_vomito'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[13][index+1] = element['cefalea'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[14][index+1] = element['irritabilidad_confusion'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[15][index+1] = element['dolor_muscular'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[16][index+1] = element['dolor_abdominal'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[17][index+1] = element['dolor_pecho'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[18][index+1] = element['dolor_articulaciones'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[19][index+1] = element['otro_signo_sintoma'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[20][index+1] = element['disnea'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[21][index+1] = element['taquipnea'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[22][index+1] = element['saturacion_oxigeno'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[23][index+1] = element['alteracion_conciencia'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[24][index+1] = element['fosfato_cloroquina'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[25][index+1] = element['hidorxicloroquina'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[26][index+1] = element['azitromicina'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[27][index+1] = element['otro_tratamiento_especifico'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[28][index+1] = element['antibiotico'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[29][index+1] = element['antiviral'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[30][index+1] = element['onoxapirina'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[31][index+1] = element['otro_anticoagulatorio'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[32][index+1] = element['especificar_medicamento'];
            }
            for (let index = 0; index < follows.length; index++) {
                const element = follows[index];
                data2[33][index+1] = element['estado_evolucion'];
            }

            return res.status(201).send({message: `Seguimientos encontrados`, status: true, data: follows, data2, headers, patient});
        })
    })
}

module.exports = {
    
    registerFollowUp,
    updateFollowUp,
    getFollowsByPatient

}