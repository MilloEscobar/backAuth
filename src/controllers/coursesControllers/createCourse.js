var coursesData = require('../../data/coursesData');

module.exports = function createCourse(req, res, next) {
	if (req.user && req.user.roles.indexOf('admin') > -1) {
		var newCourseData = req.body;
		coursesData.createCourse(newCourseData, function (err, user) {
			if (err) {
			  res.send({status : 'error', message: 'Course Exists'});
			  return;
			} else {
			  res.send( {status : 'success', message: 'Course Created'});
			}
		});
	} else {
		res.send( {status : 'error', message: 'You dont have permissions'});
	}
	
};
