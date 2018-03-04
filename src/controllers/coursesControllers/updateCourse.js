var coursesData = require('../../data/coursesData');

module.exports = function updateCourse(req, res, next) {
	if (req.user && req.user.roles.indexOf('admin') > -1) {
	  coursesData.updateCourse({_id: req.body._id}, req.body, function (err, user) {
		  if (err) {
		    res.send( {status : 'error', message: 'Course Update failed'});
		  }
		  res.send( {status : 'success', message: 'Course update success'});
	  });
	}else{
		res.send( {status : 'error', message: 'You dont have permissions'});
	}
};
