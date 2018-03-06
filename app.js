var express = require('express');

var express = require('express');

// var env = process.env.NODE_ENV || 'development';
var env = 'development';

var app = express();
var config = require('./src/config/config')[env];

require('./src/config/express')(app, config);
require('./src/config/mongoose')(config);
require('./src/config/passport')();
require('./src/config/routes')(app);

app.listen(config.port);
console.log("Server running on port: " + config.port);