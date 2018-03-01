var passport = require('passport');

module.exports = {
    login: function(req, res, next) {
        
        var auth = passport.authenticate('local', function(err, user) {
            if (err) return next(err);
            if (!user) {
                res.send({status : 'error', message: 'User or password is wrong'});
            }

            req.logIn(user, function(err) {
                if (err) return next(err);
                res.send({status : 'success', message: 'Loggued', data: user});
            })
        });

        auth(req, res, next);
    },
    logout: function(req, res, next) {
        req.logout();
        res.send({status : 'success', message: 'Loggued Out'});;
    },
    isAuthenticated: function(req, res, next) {
        if (!req.isAuthenticated()) {
            return false;
        }
        else {
            return true;
        }
    },
    isInRole: function(role) {
        return function(req, res, next) {
            if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
};