var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    id: { type: String, require: '{PATH} is required', unique: true },
    name: String,
    format:String,
    price:Number,
    quantity:Number,
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;