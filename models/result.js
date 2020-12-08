
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResultSchema = new Schema({
    type: {type: String, enum: ['AUTODIAGNOSTICO', 'DECLARACION_JURADA']},
    name: String,
    phone: String,
    company: String,
    diagnosis: String,
    typeResult: {type: String, enum: [1, 2, 3, 4]},
    results: String
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Result', ResultSchema)
