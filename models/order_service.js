
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderServiceSchema = new Schema({
   
    days: {type: Number, required: [true, 'Dias requerido']},
    status: {type: String},
    date_expired: {type: String, required: [true, 'Fecha de expiración requerido']},
    operating_expenses: {type: String, required: [true, 'Gastos operativos requerido']},
    quantity: {type: Number, required: [true, 'Cantidad requerida']},
    service: {type: Schema.Types.ObjectId, ref: 'Service', required: [true, 'Servicio requerida']},
    client: {type: Schema.Types.ObjectId, ref: 'Client', required: [true, 'Cliente requerido']},

},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('OrderService', OrderServiceSchema)
