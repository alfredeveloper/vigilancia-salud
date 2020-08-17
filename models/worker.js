
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkerSchema = new Schema({
    position: String,
    active: Boolean,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Worker', WorkerSchema)
