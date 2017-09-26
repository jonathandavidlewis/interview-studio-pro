const sequelize = require('../db/index.js');

var Question = sequelize.define('Question', {

  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  questionText: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  keywords: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
});

module.exports = Question;
