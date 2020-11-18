const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClinicalFollowUpSchema = new Schema({
    temperature:                    Number,
    chills_sweating:                Boolean,
    cough:                          Boolean,
    sore_throat:                    Boolean,
    chest_pain:                     Boolean,
    anosmia:                        Boolean,
    dysgeusia:                      Boolean,
    nasal_congestion:               Boolean,
    general_discomfort:             Boolean,
    difficulty_breathing:           Boolean,
    diarrhea:                       Boolean,
    vomits:                         Boolean,
    headache:                       Boolean,
    disorientation:                 Boolean,
    cyanosis:                       Boolean,
    serological_diagnostic_test:    {type: String, enum: ['PRUEBA 1', 'PRUEBA 2']},
    case_follow_up:                 {type: String, enum: ['SOSPECHOSO', 'CONFIRMADO', 'DESCARTADO']},
    recovered:                      Boolean,
    transfer_to_hospital:           Boolean,
    passed_away:                    Boolean,
    patient:                        {type: Schema.Types.ObjectId, ref: 'Patient'},
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('ClinicalFollowUp', ClinicalFollowUpSchema)
