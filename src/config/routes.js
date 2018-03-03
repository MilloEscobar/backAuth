var auth = require('./auth'),
    controllers = require('../controllers');

var routes = require('../routes');

module.exports = function(app) {
    app.post('/login', auth.login);
    app.post('/register', controllers.users.createUser);
    app.get('/logout', auth.logout);
    app.post('/userUpdate', controllers.users.updateUser);

    
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