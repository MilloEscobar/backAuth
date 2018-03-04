var encryption = require('../../utilities/cripto'),
  usersData = require('../../data/usersData');

module.exports = function createUser(req, res, next) {
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
  }