
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentModalitySchema = new Schema({
    concept: {type: String, required: [true, 'Concepto de modalidad requerida']},
    description: {type: String, required: [true, 'Descripción requerida']},
    active: {type: Boolean, default: true},

    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('PaymentModality', PaymentModalitySchema)
