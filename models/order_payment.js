
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderPaymentSchema = new Schema({
    payment: {type: Schema.Types.ObjectId, ref: 'Payment', required: [true, 'Pago requerido']},
    order: {type: Schema.Types.ObjectId, ref: 'OrderService', required: [true, 'Orden de servicio requerido']},
    description: String,
    operating_expense: String,
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('OrderPayment', OrderPaymentSchema)
