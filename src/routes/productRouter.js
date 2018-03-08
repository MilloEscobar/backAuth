var productRouter = require('express').Router();
var productsController = require('../controllers/productsController');

var router = function (nav) {

	productRouter.post('/', function (req, res) {
		productsController.createProduct(req, res);
	});

	productRouter.get('/:id', function (req, res) {
		productsController.getProduct(req, res);
	});

	productRouter.get('/delete/:id', function (req, res) {
		productsController.deleteProduct(req, res);
	});

	productRouter.get('/', function (req, res) {
		productsController.getAllProducts(req, res);	
	});

	productRouter.put('/productUpdate', function (req, res) {
		productsController.updateProduct(req, res);
	});

	return productRouter;
};

module.exports = router;