
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OperatingExpenseOrderSchema = new Schema({
    payment: {type: Schema.Types.ObjectId, ref: 'Payment', required: [true, 'Pago requerido']},
    description: {type: String, required: [true, 'Nombre de gasto operativo requerido']},
    amount: {type: Number, required: [true, 'Monto de gasto operativo requerido']},
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('OperatingExpenseOrder', OperatingExpenseOrderSchema)
