const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
//const passport = require('passport');
//const Strategy = require('passport-github').Strategy;
//const util = require('./utilities');
const app = express();
module.exports.app = app;
// Middleware
const morgan = require('morgan');
app.use(morgan('dev'));

//app.use(cookieParser('This is a private cookie'));

app.use(bodyParser.urlencoded({ extended: true }));
/*

app.use(session({
  secret: 'this is a secret session',
  resave: true,
  saveUninitialized: true
}));
*/

app.use(bodyParser.json());

// Router
var handler = require('./handler.js');
handler();


//app.use(express.cookieParser(cookie phrase here))

// Parse forms (signup/login)
//



// Set what we are listening on.




