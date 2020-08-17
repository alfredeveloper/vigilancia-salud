
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VehicleSchema = new Schema({
    model: String,
    plete: String,
    brand: String,
    color: String,
    active: Boolean,
    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Vehicle', VehicleSchema)
