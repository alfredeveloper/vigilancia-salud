
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name: {type: String, required: [true, 'Nombre requerido']},
    apaterno: {type: String, required: [true, 'Apellido paterno requerido']},
    amaterno: {type: String, required: [true, 'Apellido materno requerido']},
    document: {type: Number, unique: true, required: [true, 'Número de documento requerido']},
    job: {type: String, required: [true, 'Puesto de trabajo requerido']},
    telephone: {type: String, required: [true, 'Teléfono requerido']},
    birth_date: {type: Date, required: [true, 'Fecha de nacimiento requerido']},
    company: {type: String, required: [true, 'Empresa/Otra/Contratista requerido']},
    departamento: {type: String, required: [true, 'Departamento requerido']},
    provincia: {type: String, required: [true, 'Provincia requerido']},
    district: {type: String, required: [true, 'Distrito requerido']},
    address: {type: String, required: [true, 'Dirección requerido']},
    start_date: Date,
    origin: {type: String, required: false},
    confirmation: {type: String, required: false},
    clasification: {type: String, required: false},
    control: String,
    type_document: {type: Schema.Types.ObjectId, ref: 'TypeDocument'},

},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Patient', PatientSchema)
