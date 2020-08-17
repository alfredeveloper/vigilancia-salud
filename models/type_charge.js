
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TypeChargeSchema = new Schema({
    name: {type: String, required: [true, 'Nombre de cargo requerido']},
    description: {type: String, required: [true, 'Descripción requerida']},
    active: {type: Boolean, default: true},
    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('TypeCharge', TypeChargeSchema)
