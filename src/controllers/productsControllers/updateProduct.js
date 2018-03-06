var productData = require('../../data/productData');

module.exports = function updateProduct(req, res, next) {
	// if (req.user && req.user.roles.indexOf('admin') > -1) {
	  productData.updateProduct({id: req.body.id}, req.body, function (err, product) {
		  if (err) {
		    res.send( {status : 'error', message: 'Product Update failed'});
		  }
		  if (!product) {
		  	res.send({status : 'error', message: 'Product Not Found'});
		  }else{
		  	res.send( {status : 'success', message: 'Product update success'});
		  }
		  
	  });
	// }else{
		// res.send( {status : 'error', message: 'You dont have permissions'});
	// }
};
