
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RolePageSchema = new Schema({
    active: Boolean,
    page: {type: Schema.Types.ObjectId, ref: 'Page'},
    role: {type: Schema.Types.ObjectId, ref: 'Role'},    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('RolePage', RolePageSchema)
