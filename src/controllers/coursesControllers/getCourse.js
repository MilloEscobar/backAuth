var coursesData = require('../../data/coursesData');

module.exports = function getCourse(req, res, next) {
	coursesData.getCourse(req.body , function (err, course) {
	  if (err) {
	    res.send({status : 'error', message: 'Course Exists'});
	    return;
	  } else {
	    res.send( {status : 'success', message: 'Course Found', data: course });
	  }
	});
};
