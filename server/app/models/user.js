const Sequelize = require('sequelize');
const sequelize = require('../../db/index.js');
var bcrypt = require('bcrypt-nodejs');

var User = sequelize.define('User', {

  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING, allowNull: true, defaultValue: '' },
  email: { type: Sequelize.STRING, allowNull: true, defaultValue: '' },
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
});

User.sync().then(() => {
  console.log('User table sync completed')
});


module.exports = User;
