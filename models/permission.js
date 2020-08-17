
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PermissionSchema = new Schema({
    name: string,
    description: String,
    active: Boolean,
    page: {type: Schema.Types.ObjectId, ref: 'Page'},

    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Permission', PermissionSchema)
