const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let server = express();

let create = (config, db) => {
    let routes = require('../routes');
    // set all the server things
    server.set('env', config.env);
    server.set('port', config.port);
    server.set('hostname', config.hostname);
    
    // add middleware to parse the json
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: false
    }));

    //connect the database
    mongoose.connect(
        db.database,
        { 
            useNewUrlParser: true,
            useCreateIndex: true
        }
    );

    // Set up routes
    routes.init(server);
};

let start = () => {
    let hostname = server.get('hostname'),
        port = server.get('port');
    server.listen(port, function () {
        console.log('Express server listening on - http://' + hostname + ':' + port);
    });
};
module.exports = {
        create: create,
        start: start
    };
