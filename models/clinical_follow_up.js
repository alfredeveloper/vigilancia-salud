const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClinicalFollowUpSchema = new Schema({
    
    seguimiento_pot: {type: Boolean},
    pa: {type: Number},
    fc: {type: Number},
    fr: {type: Number},
    temperatura: {type: Number},
    pulsioximetria: {type: Number},
    tos: {type: Boolean},
    dolor_garganta: {type: Boolean},
    congestion_nasal: {type: Boolean},
    fiebre: {type: Boolean},
    malestar_general: {type: Boolean},
    dificultad_respiratoria: {type: Boolean},
    diarrea: {type: Boolean},
    nausea_vomito: {type: Boolean},
    cefalea: {type: Boolean},
    irritabilidad_confusion: {type: Boolean},
    dolor_muscular: {type: Boolean},
    dolor_abdominal: {type: Boolean},
    dolor_pecho: {type: Boolean},
    dolor_articulaciones: {type: Boolean},
    otro_signo_sintoma: {type: String},
    disnea: {type: Boolean},
    taquipnea: {type: Boolean},
    saturacion_oxigeno: {type: Boolean},
    alteracion_conciencia: {type: Boolean},
    fosfato_cloroquina: {type: Boolean},
    hidorxicloroquina: {type: Boolean},
    azitromicina: {type: Boolean},
    otro_tratamiento_especifico: {type: String},
    antibiotico: {type: String},
    antiviral: {type: String},
    onoxapirina: {type: String},
    otro_anticoagulatorio: {type: String},
    especificar_medicamento: {type: String},
    estado_evolucion: {type: String, required: false},
    condicion_egreso: {type: String, required: false},
    patient: {type: Schema.Types.ObjectId, ref: 'Patient', required: [true, 'Referencia de paciente requerido']},
    date: {type: Date},
    confirmation: {type: String},
    confirmation_code: {type: String}
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('ClinicalFollowUp', ClinicalFollowUpSchema)
