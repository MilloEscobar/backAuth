var productData = require('../../data/productData');

module.exports = function createProduct(req, res, next) {
	// if (req.user && req.user.roles.indexOf('admin') > -1) {
		productData.createProduct(req.body, function (err, user) {
			if (err) {
			  res.send({status : 'error', message: 'Product Exists'});
			  return;
			} else {
			  res.send( {status : 'success', message: 'Product Created'});
			}
		});
	// } else {
		// res.send( {status : 'error', message: 'You dont have permissions'});
	// }
	
};
