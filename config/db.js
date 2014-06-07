'use strict';
var mongojs = require('mongojs');

var config = {
  "db": "myDb",  
  "host": "localhost",  
  "user": "",
  "pw": "",
  "port": 27017
};

var port = (config.port.length > 0) ? ":" + config.port : '';
var login = (config.user.length > 0) ? config.user + ":" + config.pw + "@" : '';
var uristring =  "mongodb://" + login + config.host + port + "/" + config.db;

// Connect to Database
var db = mongojs(uristring, ['posts', 'testData']); // default collection

// validate the connection - no easy way! :(
db.posts.findOne(function (err, res) {
  if(err){
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
  }else{
    console.log('Successfully connected to: ' + uristring);
  }
});

module.exports = db;