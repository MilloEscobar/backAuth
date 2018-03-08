var productData = require('../../data/productData');

module.exports = function updateProduct(req, res, next) {
	// if (req.user && req.user.roles.indexOf('admin') > -1) {
	productData.updateProduct({id: req.body.id}, req.body, function (err, product) {
		if (err) {return res.send( {status : 'error', message: 'Product Update failed'});}
		if (product["n"] == 0) {return res.send({status : 'error', message: 'Product Not Found'});}
		if (product["nModified"] == 0) {return res.send({status : 'success', message: 'Product found but no fields were modified'});}
		res.send( {status : 'success', message: 'Product updated successfuly'});
	});
	// }else{
		// res.send( {status : 'error', message: 'You dont have permissions'});
	// }
};