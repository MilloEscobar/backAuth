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
    // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });

    app.all('*', function(req, res,next) {
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }

});

    app.use(session({secret: config.secret, resave: true, rolling: true, cookie: { maxAge: 60000 }, saveUninitialized: true}));

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