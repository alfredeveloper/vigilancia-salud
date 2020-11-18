
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: String,
    password: String,
    name: String,
    lastname: String,
    active: Boolean,
    role: {type: String, enum: ['DOCTOR', 'LECTOR']},
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('User', UserSchema)
