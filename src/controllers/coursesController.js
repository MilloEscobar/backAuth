var coursesData = require('../data/coursesData');

module.exports = {
    getAllCourses: function (req, res, next) {
        return 'getAllCourses';
    },
    getCourse: function (req, res, next) {
        return 'getCourse';
    },
    createUser: function (req, res, next) {
        return 'createUser';

        // var newCourseData = req.body;

        // coursesData.createUser(newCourseData, function (err, user) {
        //     if (err) {
        //         req.session.error = 'Username exists!';
        //         res.redirect('/register');
        //         return;
        //     }
        // });
    },
    updateCourse: function (req, res, next) {
        return 'updateCourse ';

        // coursesData.updateCourse({_id: req.body._id}, updatedUserData, function (err, user) {
        //     res.redirect('/profile');
        // })
    }
};