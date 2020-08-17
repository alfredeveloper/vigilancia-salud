
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JuridicalSchema = new Schema({
    
    name: String,
    fiscal_address: String,
    phone: String,
    email: String,
    ubication: String,
    active: Boolean,
    client: {type: Schema.Types.ObjectId, ref: 'Client'},
   
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Juridical', JuridicalSchema)
