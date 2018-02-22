var courseRouter = require('./courseRouter')('course');
var mailRouter = require('./mailRouter')('mail');

module.exports = {
  courseRouter: courseRouter,
  mailRouter : mailRouter
};