var courseRouter = require('express').Router();
var coursesController = require('../controllers/coursesController');

var router = function (nav) {

	courseRouter.post('/', function (req, res) {
		console.log("courseRouter: " , req.body)
		coursesController.createCourse(req, res);
	});

	courseRouter.get('/', function (req, res) {

		console.log("courseRouter: " , req.body)
		coursesController.getAllCourses(req, res);
		
	});

	return courseRouter;
};

module.exports = router;