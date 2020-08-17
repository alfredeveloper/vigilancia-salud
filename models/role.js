
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
    name: String,
    description: String,
    active: Boolean,
    employee: {type: Schema.Types.ObjectId, ref: 'Employee'},

    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Role', RoleSchema)
