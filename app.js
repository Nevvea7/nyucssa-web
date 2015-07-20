"use strict";
var express = require('express')
  , app = express() // Web framework to handle routing requests
  , MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
  , config = require('config')
  , routes = require('./routes')
  , path = require('path'); // Routes for our application


MongoClient.connect(config.db, function(err, db) {
    
    if(err) throw err;

    app.set('port', (process.env.PORT || 5000));

    app.use(express.static(__dirname + '/public'));

    // views is directory for all template files
    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'ejs');

    // Express middleware to populate 'req.cookies' so we can access cookies
    //app.use(express.cookieParser());

    // Express middleware to populate 'req.body' so we can access POST variables
    //app.use(express.bodyParser());

    // Application routes
    routes(app, db);

    app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    ***REMOVED***);
***REMOVED***);
