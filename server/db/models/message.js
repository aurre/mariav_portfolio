const Sequelize = require('sequelize');
const db = require('../db');


const Message = db.define('message', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  message: {
    type: Sequelize.TEXT,
  }
})

module.exports = Message;
