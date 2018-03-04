var coursesData = require('../../data/coursesData');

module.exports = function getLastCourses(req, res, next) {
  coursesData.getLastCourses(req ,function (err, courses) {
    if (err) {

      res.send({status : 'error', message: 'Course not found',});
      return;
    } else {
        var courseMap = {};

        courses.forEach(function(course) {
          courseMap[course._id] = course;
        }); 
      res.send( {status : 'success', message: 'Courses Found',data:courses });
    }
  });
};
