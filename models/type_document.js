
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TypeDocumentSchema = new Schema({
    description: {type: String, required: [true, 'Tipo de documento requerido']},
    name: {type: String, required: [true, 'Descripción requerido']},
    active: {type: Boolean, default: true},
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('TypeDocument', TypeDocumentSchema)
