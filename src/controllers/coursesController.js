var getAllCourses = require('./coursesControllers/getAllCourses'),
    getLastCourses = require('./coursesControllers/getLastCourses'),
    getCourse = require('./coursesControllers/getCourse'),
    createCourse = require('./coursesControllers/createCourse'),
    updateCourse = require('./coursesControllers/updateCourse');

module.exports = {
  getAllCourses: function getAllCoursesFunc(req, res, next) {
     getAllCourses(req, res, next);
  },
  getLastCourses: function getLastCoursesFunc(req, res, next) {
    getLastCourses(req, res, next);
  },
  getCourse: function getCourseFunc(req, res, next) {
    getCourse(req, res, next);
  },
  createCourse: function createCourseFunc(req, res, next) {
    createCourse(req, res, next);
  },
  updateCourse: function updateCourseFunc(req, res, next) {
    updateCourse(req, res, next);
  }
};