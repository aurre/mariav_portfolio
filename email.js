const nodemailer = require('nodemailer');
const pass = require('./secret');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mariavictoria.marketing@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

const orderConfSubj = 'sitio de marketing';

module.exports = {
  transporter,
  orderConfSubj,
};
