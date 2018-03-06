var auth = require('./auth'),
    controllers = require('../controllers'),
    routes = require('../routes');

module.exports = function(app) {

    // AUTHENTICATION
    app.post('/login', auth.login);
    app.post('/register', controllers.users.createUser);
    app.get('/logout', auth.logout);


    // ROUTES
    app.use('/users', routes.usersRouter);
    app.use('/api/mail', routes.mailRouter);
    app.use('/api/course', routes.courseRouter);
    app.use('/api/product', routes.productsRouter);

    // DEFAULT
    app.get('/', function (req, res) {
        res.render('index', {currentUser: req.user});
    });
    
    // ERROR
    app.get('*', function (req, res) {
        res.send( {status : 'Not Found', message: 'Route Not Found'});
    });
};