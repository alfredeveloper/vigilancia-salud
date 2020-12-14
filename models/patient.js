
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name: String,
    apaterno: String,
    amaterno: String,
    dni: {type: Number, unique: true, required: [true, 'DNI requerido']},
    job: String,
    telephone: String,
    birth_date: Date,
    company: String,
    district: String,
    start_date: Date,
    origin: {type: String, enum: ['CON SINTOMA', 'CON SOSPECHA', 'CON RIESGO']},
    control: String,
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Patient', PatientSchema)
