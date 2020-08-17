
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    type: String,
    type_document: String,
    document: String,
    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Client', ClientSchema)
