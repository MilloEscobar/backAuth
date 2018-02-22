var Course = require('mongoose').model('Course');

module.exports = {
  createUser: function (course, callback) {
    Course.create(course, callback);
  },
  
  updateUser: function (query, course, callback) {
      Course.update(query, course, callback);
  }
};