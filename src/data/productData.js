var Product = require('mongoose').model('Product');

module.exports = {
	getAllProducts: function (callback) {
		 Product.find({},callback);
	},
	createProduct: function (product, callback) {
		Product.create(product, callback);
	},
	deleteProduct : function (product,callback) {
		Product.remove({id: product.id}, callback);
	},
	updateProduct: function (query, product, callback) {
		Product.update(query, product, callback);
	},
	getProduct : function (product,callback) {
		Product.findOne({id: product.id}, callback);
	}
};