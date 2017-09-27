const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
//const passport = require('passport');
//const Strategy = require('passport-github').Strategy;
//const util = require('./utilities');
const app = express();

// Middleware
const morgan = require('morgan');
app.use(cookieParser('This is a private cookie'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'this is a secret session',
  resave: true,
  saveUninitialized: true
}));

// Router
var router = require('./routes.js');

//app.use(bodyParser.json());

//app.use(express.cookieParser(cookie phrase here))

// Parse forms (signup/login)




// Set what we are listening on.



module.exports.app = app;
