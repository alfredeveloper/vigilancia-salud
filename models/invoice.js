
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InvoiceSchema = new Schema({
    serie: {type: String, required: [true, 'Serie requerida']},
    correlative: {type: String, required: [true, 'Correlativo requerido']},
    invoicebase64: {type: String, required: [true, 'Documento de factura requerida']},
    contractbase64: {type: String, required: [true, 'Documento de contrato requerido']},
    subtotal: {type: Number, required: [true, 'Subtotal requerido']},
    igv: {type: String, Number: [true, 'IGV requerido']},
    discount: {type: Number, required: [true, 'Descuento requeridao']},
    total: {type: Number, required: [true, 'Total requerido']},
    status: {type: String},

},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Invoice', InvoiceSchema)
