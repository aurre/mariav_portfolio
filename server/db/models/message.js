const Sequelize = require('sequelize');
const db = require('../db');
const { transporter, messageSubj } = require('../../../email');


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
});

Message.afterCreate((message) => {
  const email = 'aurrecochearaysa@gmail.com';

  const mailOptions = {
     from: 'frontdesk.chicago17@gmail.com',
     to: email,
     subject: messageSubj,
     html: `<p>${message.name},
              ${message.email} ,
              ${message.message}</p>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    })
})

module.exports = Message;
