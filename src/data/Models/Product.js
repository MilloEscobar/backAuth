var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    id: { type: String, require: '{PATH} is required', unique: true },
    name: String,
    format:String,
    price:Number,
    quantity:Number,
    image: { type: String, default: 'neverborn' }
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;