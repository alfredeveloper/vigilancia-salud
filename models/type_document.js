
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TypeDocumentSchema = new Schema({
    type: {type: String, required: [true, 'Tipo requerido']},
    name: {type: String, required: [true, 'Nombre requerido']},
    description: {type: String, required: [true, 'Descripción requerida']},
    status: {type: Boolean, required: [true, 'Estado requerido']},
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('TypeDocument', TypeDocumentSchema)
