var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    auth = require('./auth'),
    passport = require('passport');

module.exports = function(app, config) {
    //app.set('view engine', '.ejs');
    app.set('view engine', 'jade');
    app.set('views', config.rootPath + '/src/views');
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended: true} ));
    app.use(session({secret: config.secret, resave: true, saveUninitialized: true}));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/public'));

    app.use('/admin', function (req, res, next) {
      if (!auth.isInRole('admin')(req, res, next)) {
        //req.session.error = '';
        res.send('You are not authorized!');
        return;
      }
      
      next();
      
    });

    app.use(function (req, res, next) {
      if (req.session.error) {
        var msg = req.session.error;
        req.session.error = undefined;
        app.locals.errorMessage = msg;
      }

      else {
        app.locals.errorMessage = undefined;
      }

      next();
    });
}