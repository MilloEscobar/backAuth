var updateUser = require('./usersControllers/updateUser'),
    userUpdatePassword = require('./usersControllers/userUpdatePassword'),
    userUpdateCurses = require('./usersControllers/userUpdateCurses'),
    userUpdateName = require('./usersControllers/userUpdateName'),
    createUser = require('./usersControllers/createUser');

module.exports = {
  createUser: function createUserFunc (req, res, next) {
    createUser(req, res, next);
  },
  updateUser: function updateUserFunc (req, res, next) {
    updateUser(req, res, next);
  },
  userUpdatePassword: function userUpdatePasswordFunc (req, res, next) {
    userUpdatePassword(req, res, next);
  },
  userUpdateCurses: function userUpdateCursesFunc (req, res, next) {
    userUpdateCurses(req, res, next);
  },
  userUpdateName: function userUpdateNameFunc (req, res, next) {
    userUpdateName(req, res, next);
  },
};