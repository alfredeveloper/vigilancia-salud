
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoinSchema = new Schema({
    description: String,
    symbol: String,
    name: String,
    icon: String,
    active: Boolean
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

module.exports = mongoose.model('Coin', CoinSchema)
