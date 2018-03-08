var productData = require('../../data/productData');

module.exports = function deleteProduct(req, res, next) {
	productData.deleteProduct(req.params, function (err, product) {
	  if (err) {
	    res.send({status : 'error', message: 'product Not Found'});
	    return;
	  } 
	 if (!product) {
	 	res.send({status : 'error', message: 'product Not Found'});
	 } else {
	    res.send( {status : 'success', message: 'product Found', data: product });
	  }
	});
};
