const Sequelize = require('sequelize');
const sequelize = require('../../db/index.js');

const Question = sequelize.define('Question', {

  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: { type: Sequelize.STRING, allowNull: false },
  questionText: { type: Sequelize.STRING, allowNull: false },
  maxTime: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 30000 },
  videoUrl: { type: Sequelize.STRING, allowNull: true },
  videoLoopUrl: { type: Sequelize.STRING, allowNull: true  },
  keywords: { type: Sequelize.STRING, allowNull: false },
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
});

Question.sync().then(() => {
  console.log('Question table sync complete')
});

module.exports = Question;
