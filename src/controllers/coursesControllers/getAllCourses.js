var coursesData = require('../../data/coursesData');

module.exports = function getAllCourses (req, res, next) {
  coursesData.getAllCourses(function (err, courses) {
    if (err) {
      res.send({status : 'error', message: 'Course Exists'});
      return;
    } else {
        var courseMap = {};

        courses.forEach(function(course) {
          courseMap[course._id] = course;
        }); 
      res.send( {status : 'success', message: 'Courses Found', data:courses });
    }
  });
};
