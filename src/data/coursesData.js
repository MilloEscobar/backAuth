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
		Course.findOne({_id: course._id}, callback);
	},
	getLastCourses: function (params, callback) {
		let num = parseInt(params.params.num)
		Course.find({},callback).sort({$natural:-1}).limit(num);
	}
};