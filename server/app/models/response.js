const Sequelize = require('sequelize');
const sequelize = require('../../db/index.js');

var Response = sequelize.define('Response', {

  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  responseText: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  keywords: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  stars: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
  videoUrl: { type: Sequelize.INTEGER, allowNull: false },
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

Response.sync().then(() => {
  console.log('Response table sync complete')
});

module.exports = Response;
