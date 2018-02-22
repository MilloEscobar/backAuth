var courseRouter = require('express').Router();
var coursesController = require('../controllers/coursesController');

var router = function (nav) {

	courseRouter.post('/', function (req, res) {
		console.log("courseRouter: " , req.body)
		var hello = coursesController.getAllCourses() + nav;
		res.send(hello);
	});

	courseRouter.get('/', function (req, res) {

		console.log("courseRouter: " , req.body)
		var hello = coursesController.getAllCourses() + nav;
		res.send(hello);
		
	});

	return courseRouter;
};

module.exports = router;