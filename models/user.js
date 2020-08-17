
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    lastname: String,
    birthday: Date,
    dni: String,
    phone: String,
    address: String,
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('User', UserSchema)
