var passport = require('passport'),
    LocalPassport = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalPassport(function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) {
                console.log('****Error loading user: ****' + err);
                return done(err);
            }

            if (user && user.authenticate(password)) {
                return done(null, user);
            }
            else {
                console.log('****Error loading user else:*****');
                return done(null, false);
            }
        })
    }));

    passport.serializeUser(function(user, done) {
        if (user) {
            return done(null, user._id);
        }
    });

    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        if (err) {
            console.log("***Error deserializeUser user:****"+err)
        }
        console.log("****No Error deserializeUser user:***"+user)
        done(err, user);
      });
    });
};