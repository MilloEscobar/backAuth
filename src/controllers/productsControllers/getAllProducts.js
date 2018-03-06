var productData = require('../../data/productData');

module.exports = function getAllProducts (req, res, next) {
  productData.getAllProducts(function (err, products) {
    if (err) {
      res.send({status : 'error', message: 'product Exists'});
      return;
    } else {
        var productMap = {};

        products.forEach(function(product) {
          productMap[product._id] = product;
        }); 
      res.send( {status : 'success', message: 'products Found', data:products });
    }
  });
};
