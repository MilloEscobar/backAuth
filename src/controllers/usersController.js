var encryption = require('../utilities/cripto'),
  usersData = require('../data/usersData');

module.exports = {
  createUser: function (req, res, next) {
    var newUserData = req.body;

    if (newUserData.password !== newUserData.confirmPassword) {
      res.send( {status : 'error', message:'Passwords do not match!'});
    }

    else {
      newUserData.salt = encryption.generateSalt();
      newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
      usersData.createUser(newUserData, function (err, user) {
        if (err) {
          res.send( {status : 'error', message:err});
          return;
        }

        req.logIn(user, function (err) {
          if (err) {
            res.status(400);
            return res.send({reason: err.toString()});
          }

          else {
            res.send({status : 'success', message: 'User Created', data: user});
          }
        });
      });
    }
  },
  updateUser: function (req, res, next) {
    console.log("req.body: ", req.body);
    console.log('req.user: ', req.user);

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
        console.log("-************************fields to change: ",updatedUserData)
        usersData.updateUser({_id: req.body._id}, updatedUserData, function (err, user) {
          console.log("-************************fields to change: ",user)
          res.send( {status : 'success', message: 'User update success'});
        });
      }

    } else {
      res.send( {status : 'error', message: 'You dont have permissions'});
    }
  }
};