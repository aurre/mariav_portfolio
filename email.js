const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'frontdesk.chicago17',
    pass: 'aurrecochea@92',
  },
});

const messageSubj = 'Maria Victoria Web Notificacion';

module.exports = {transporter, messageSubj}
