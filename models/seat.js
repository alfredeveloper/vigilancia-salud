
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SeatSchema = new Schema({
    name: String,
    description: String,
    ubigeo: String,
    active: Boolean,
    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Seat', SeatSchema)
