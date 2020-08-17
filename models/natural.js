
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NaturalSchema = new Schema({
    name: String,
    lastname: String,
    gender: {type: String, enum: ['male', 'female']},
    birthday: Date,
    address: String,
    phone: String,
    email: String,
    ubication: String,
    active: Boolean,
    client: {type: Schema.Types.ObjectId, ref: 'Client'},

},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Natural', NaturalSchema)
