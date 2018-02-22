var auth = require('./auth'),
    controllers = require('../controllers');

var routes = require('../routes');

module.exports = function(app) {
    app.get('/register', controllers.users.getRegister);
    app.post('/register', controllers.users.createUser);

    app.post('/login', auth.login);
    app.get('/logout', auth.logout);
    app.get('/login', controllers.users.getLogin);
    app.get('/profile', controllers.users.getProfile);

    
    // app.get('/', function (req, res) {
    //     res.render('index', { 
    //         title:'Macro Bible',
    //         });
    // });

    app.get('/', function (req, res) {
        res.render('index', {currentUser: req.user});
    });

    app.use('/api/mail', routes.mailRouter);
    app.use('/api/course', routes.courseRouter);

    // app.use('/api/mail', mailRouter);
    // app.use('/api/course', courseRouter);
    
    app.get('*', function (req, res) {
        res.render('index', {currentUser: req.user});
    });
};