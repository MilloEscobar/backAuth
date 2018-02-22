var Course = require('mongoose').model('Course');

module.exports = {
	getAllCourses: function (callback) {
		 Course.find({},callback);
	},
	createCourse: function (course, callback) {
		Course.create(course, callback);
	},

	updateCourse: function (query, course, callback) {
		Course.update(query, course, callback);
	},
	getCourse : function function_name(course,callback) {
		findOne({_id: course._id}, callback);
	}
};