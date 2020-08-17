
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
    name: {type: String, required: [true, 'Nombre requerido']},
    description: {type: String, required: [true, 'Descripción requerida']},
    price: {type: Number, required: [true, 'Precio requerido']},
    active: Boolean,
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Service', ServiceSchema)
