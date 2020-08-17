
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AmortizationSchema = new Schema({
    amount: {type: String, required: [true, 'Monto requerido']},
    description: {type: String, required: [true, 'Descripción requerida']},
    payment: {type: Schema.Types.ObjectId, ref: 'Payment', required: [true, 'Pago requerido']},

},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Amortization', AmortizationSchema)
