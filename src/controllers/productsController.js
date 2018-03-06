var getAllProducts = require('./productsControllers/getAllProducts'),
    getProduct = require('./productsControllers/getProduct'),
    createProduct = require('./productsControllers/createProduct'),
    updateProduct = require('./productsControllers/updateProduct');

module.exports = {
  getAllProducts: function getAllProductsFunc(req, res, next) {
     getAllProducts(req, res, next);
  },
  getProduct: function getProductFunc(req, res, next) {
    getProduct(req, res, next);
  },
  createProduct: function createProductFunc(req, res, next) {
    createProduct(req, res, next);
  },
  updateProduct: function updateProductFunc(req, res, next) {
    updateProduct(req, res, next);
  }
};