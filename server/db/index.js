const Sequelize = require('sequalize');
const credentials = require('./server.config.js')

const sequelize = new Sequelize('verbalization', credentials.username, credentials.password, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});

module.exports = sequelize;
