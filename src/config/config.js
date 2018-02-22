var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/customers',
        port: process.env.PORT || 3000,
        secret: "56950fe494af8e88204adf6d"
    }
};