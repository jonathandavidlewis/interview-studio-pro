const app = require('./server/server.js').app;
const express = require('express');
const environmentVars = require('./environment-variables');
const port = ( environmentVars.port || 80 );

console.log('new Port: ' + port);

app.set('port', port);

app.use(express.static(__dirname + '/public/client'));
console.log('public directory is: ' + __dirname + '/public/client');

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Interview Studio is listening on', app.get('port'));
}
