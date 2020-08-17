
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BankAccountSchema = new Schema({
    bank: String,
    account_number: String,
    cci: String,
    coin: {type: Schema.Types.ObjectId, ref: 'Coin'},
    active: Boolean,
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('BankAccount', BankAccountSchema)