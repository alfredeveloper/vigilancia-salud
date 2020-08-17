
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PageSchema = new Schema({
    name: String,
    description: String,
    icon: String,
    active: Boolean,
    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Page', PageSchema)
