const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    id: {
        type: String
    },
    favorite: {
        type: Boolean
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = { Product }