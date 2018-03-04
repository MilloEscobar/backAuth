var encryption = require('../../utilities/cripto'),
  usersData = require('../../data/usersData');

module.exports = function updateUser (req, res, next) {

    if (!req.user) {
      return res.send( {status : 'error', message: 'You dont have permissions'});
    }

    if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
      var updatedUserData = req.body;
      if (updatedUserData.hasOwnProperty('password')) {

        if (updatedUserData.newPassword !== updatedUserData.comfirmNewPassword) {
          res.send( {status : 'error', message:'Passwords do not match!'});

        } else {

          let oldPass = encryption.generateHashedPassword(req.user.salt, updatedUserData.password);

          if (req.user.hashPass === oldPass) {

            let hashPass = encryption.generateHashedPassword(req.user.salt, updatedUserData.newPassword);
            usersData.updateUser({_id: req.body._id}, {hashPass : hashPass}, function (err, user) {
              res.send( {status : 'success', message: "User's password update success"});
            });

          } else {
            res.send( {status : 'error', message:'Previous password incorrect'});
          }
        }
      } else {
        usersData.updateUser({_id: req.body._id}, updatedUserData, function (err, user) {
          if (err) {
            return res.send({status : 'error', message: err});
          }
          res.send( {status : 'success', message: 'User update success'});
        });
      }

    } else {
      res.send( {status : 'error', message: 'You dont have permissions'});
    }
  };