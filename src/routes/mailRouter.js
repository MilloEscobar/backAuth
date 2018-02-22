var mailRouter = require('express').Router();

var router = function (nav) {

	mailRouter.post('/', function (req, res) {
		console.log("mailRouter: " , req.body)
		var hello = 'POST request to the ' + nav;
		  res.send(hello);
	});

	mailRouter.get('/', function (req, res) {
		console.log("mailRouter: " , req.body)
		var hello = 'GET request to the ' + nav;
		  res.send(hello);
	});

	return mailRouter;
};

module.exports = router;