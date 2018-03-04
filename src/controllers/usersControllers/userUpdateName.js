var usersData = require('../../data/usersData');

module.exports =  function userUpdateName (req, res, next) {
    if (!req.user) {
      return res.send( {status : 'error', message: 'You dont have permissions'});
    }

    if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
      var updatedUserData;

      if (req.body.hasOwnProperty('name') && req.body.name != "") { 
        usersData.updateUser({_id: req.body._id}, {hashPass : hashPass}, function (err, user) {

          if (err) {
            return res.send({status : 'error', message: err});
          }

          res.send( {status : 'success', message: "User's name updated successfully"});
        });
      }

      
    } else {
      res.send( {status : 'error', message: 'You dont have permissions'});
    }
  };