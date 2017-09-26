const app = require('./server/server.js').app;
const express = require('express');

app.set('port', 80);

app.use(express.static(__dirname + '/public/client'));
console.log('public directory is: ' + __dirname + '/public/client');

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Interview Studio is listening on', app.get('port'));
}
