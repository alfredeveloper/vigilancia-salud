
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OperatingExpensesSchema = new Schema({
    description: {type: String, required: [true, 'Nombre de gasto operativo requerido']},
    active: {type: Boolean, default: true},
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('OperatingExpenses', OperatingExpensesSchema)
