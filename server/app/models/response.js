const sequelize = require('../db/index.js');

var Response = sequelize.define('Response', {

  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  questionText: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  keywords: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  question_id: {
    type: Sequelize.INTEGER,

    references: {
      // This is a reference to another model
      model: Question,

      // This is the column name of the referenced model
      key: 'id',
    }
  },
  user_id: {
    type: Sequelize.INTEGER,

    references: {
      // This is a reference to another model
      model: User,

      // This is the column name of the referenced model
      key: 'id',
    }
  }
});

module.exports = Response;
