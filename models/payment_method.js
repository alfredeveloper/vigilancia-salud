
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentMethodSchema = new Schema({
    name: {type: String, required: [true, 'Nombre de método de pago requerido']},
    description: {type: String, required: [true, 'Descripción requerida']},
    active: {type: Boolean, default: true},
    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema)
