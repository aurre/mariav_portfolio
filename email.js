const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'frontdesk.chicago17@gmail.com',
    pass: 'v4H3@=psQE.A7:s>eW',
  },
});

const orderConfSubj = 'sitio de marketing';

module.exports = {
  transporter,
  orderConfSubj,
};
