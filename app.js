const app = require('./server/server.js').app;
const express = require('express');
const environmentVars = require('./environment-variables');
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('myserver.key', 'utf8');
var certificate = fs.readFileSync('domain.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//httpServer.listen(8080);



app.set('port', environmentVars.port);


app.use(express.static(__dirname + '/public/client'));
console.log('public directory is: ' + __dirname + '/public/client');
httpsServer.listen(443);

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Interview Studio is listening on', app.get('port'));
}
