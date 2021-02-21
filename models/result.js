
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResultSchema = new Schema({
    type: {type: String, enum: ['AUTODIAGNOSTICO', 'DECLARACION_JURADA']},
    result: {type: String, enum: ['NINGUNO','SOSPECHOSO','PROBABLE','SOSPECHOSO_PROBABLE']},
    patient: {type: Schema.Types.ObjectId, ref: 'Patient', required: [true, 'Referencia de paciente requerido']},
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Result', ResultSchema)
