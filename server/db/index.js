'use strict';
const Sequelize = require('sequelize');
const credentials = require('./server-config.js');
let host = credentials.ip || 'localhost';

const sequelize = new Sequelize('verbalization', credentials.username, credentials.password, {
  host: host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});


sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


module.exports = sequelize;
