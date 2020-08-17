
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConfigurationSchema = new Schema({
    business_name: String,
    ruc: String,
    trade_name: String,
    fiscal_address: String,
    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Configuration', ConfigurationSchema)
