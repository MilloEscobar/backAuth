var usersRouter = require('express').Router();
var usersController = require('../controllers/usersController');

var router = function (nav) {

	usersRouter.get('/', function (req, res) {
		usersController.getAllUsers(req, res);
	});

	usersRouter.put('/userUpdate', function (req, res) {
		usersController.updateUser(req, res);
	});

	usersRouter.put('/userUpdatePassword', function (req, res) {
		usersController.userUpdatePassword(req, res);
	});

	usersRouter.put('/userUpdateCurses', function (req, res) {
		usersController.userUpdateCurses(req, res);
	});

	usersRouter.put('/userUpdateProfile', function (req, res) {
		usersController.userUpdateProfile(req, res);
	});
	
	return usersRouter;
};

module.exports = router;