
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovementSchema = new Schema({
    amount: {type: Number, required: [true, 'Monto requerido']},
    efective: {type: Number},
    visa: {type: Number},
    mastercard: {type: Number},
    amex: {type: Number},
    description: {type: String, required: [true, 'Descripción requerida']},
    account: {type: Schema.Types.ObjectId, ref: 'BankAccount', required: [true, 'Cuenta bancaria requerida']},
    charge: {type: Schema.Types.ObjectId, ref: 'TypeCharge', required: [true, 'Tipo de cargo requerido']},

},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Movement', MovementSchema)
