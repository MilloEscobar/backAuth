var usersData = require('../../data/usersData');

module.exports =   function  userUpdateCurses (req, res, next) {
    if (!req.user) {
      return res.send( {status : 'error', message: 'You dont have permissions'});
    }

    if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
      var updatedUserData = req.body;
      if (updatedUserData.hasOwnProperty('courses')) {
        usersData.updateUser({_id: req.body._id}, {courses : updatedUserData['courses']}, function (err, user) {
          if (err) {
            return res.send({status : 'error', message: err});
          }
          res.send( {status : 'success', message: "User's courses updated successfully"});
        });
      } else {
        res.send( {status : 'error', message: 'No courses provided'});
      }

    } else {
      res.send( {status : 'error', message: 'You dont have permissions'});
    }
  }