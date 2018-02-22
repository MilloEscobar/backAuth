var coursesData = require('../data/coursesData');

module.exports = {
    getAllCourses: function (req, res, next) {
        coursesData.getAllCourses(function (err, courses) {
            if (err) {
                res.send({status : 'error', message: 'Course Exists'});
                return;
            } else {
                    var courseMap = {};

                    courses.forEach(function(course) {
                      courseMap[course._id] = course;
                    }); 
                res.send( {status : 'success', message: 'Courses Found',data:courses });
            }
        });
    },
    getCourse: function (req, res, next) {
        coursesData.getCourse(req.body , function (err, course) {
            if (err) {
                res.send({status : 'error', message: 'Course Exists'});
                return;
            } else {
                res.send( {status : 'success', message: 'Course Found', data: course });
            }
        });
    },
    createCourse: function (req, res, next) {

        var newCourseData = req.body;

        coursesData.createCourse(newCourseData, function (err, user) {
            if (err) {
                res.send({status : 'error', message: 'Course Exists'});
                return;
            } else {
                res.send( {status : 'success', message: 'Course Created'});
            }
        });
    },
    updateCourse: function (req, res, next) {

        coursesData.updateCourse({_id: req.body._id}, updatedUserData, function (err, user) {
            if (err) {
                res.send( {status : 'error', message: 'Course Update failed'});
            }
            res.send( {status : 'success', message: 'Course update success'});
        })
    }
};