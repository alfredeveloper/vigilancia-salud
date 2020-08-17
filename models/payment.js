
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
    
    serie: {type: String},
    correlative: {type: String},
    invoicebase64: {type: String},
    contractbase64: {type: String},
    subtotal: {type: String},
    igv: {type: String},
    discount: {type: String},
    total: {type: String},
    amount: {type: String},
    paid: {type: String},
    pending: {type: Number},
    efective: {type: Number},
    visa: {type: Number},
    mastercard: {type: Number},
    amex: {type: Number},
    days: {type: String, Number: [true, 'Dias requerido']},
    date_expired: {type: Date, required: [true, 'Fecha de expiracion requerido']},
    status: {type: String},
    payment_modality: {type: String, required: [true, 'Modalidad de pago requerido']},
    payment_method: {type: String, required: [true, 'Método de pago requerido']},

},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Payment', PaymentSchema)
