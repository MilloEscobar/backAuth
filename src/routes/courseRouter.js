var courseRouter = require('express').Router();
var coursesController = require('../controllers/coursesController');

var router = function (nav) {

	courseRouter.post('/', function (req, res) {
		coursesController.createCourse(req, res);
	});

	courseRouter.get('/last/:num', function (req, res) {
		coursesController.getLastCourses(req, res);
	});

	courseRouter.get('/', function (req, res) {
		coursesController.getAllCourses(req, res);	
	});

	return courseRouter;
};

module.exports = router;