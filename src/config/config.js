var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

const	dbUser = process.env.dbUser || "mbAnmin",
		dbPass = process.env.dbPass || "12qw12qw",
		dbEndpoint= process.env.dbEndpoint || "ds247688.mlab.com:47688/microbible";

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://'+ dbUser +':'+ dbPass +'@'+ dbEndpoint,
        port: process.env.PORT || 3000,
        secret: process.env.SECRET || "56950fe494af8e88204adf6d",
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://'+ dbUser +':'+ dbPass +'@'+ dbEndpoint,
        port: process.env.PORT || 3000,
        secret: process.env.SECRET || "56950fe494af8e88204adf6d",
    }
};