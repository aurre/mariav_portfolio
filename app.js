const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const { transporter, orderConfSubj } = require('./email');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('.'));

app.post('/', (req, res, next) => {
  let message = `<p>Nombre: ${req.body.name} <br> Correo Electronico: ${
    req.body._replyto
  }, <br> Mensaje: ${req.body.message}</p>`;

  const email = 'aurrecochearaysa@gmail.com';

  const mailOptions = {
    from: 'frontdesk.chicago17@gmail.com',
    to: email,
    subject: orderConfSubj,
    html: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });

  if (req.body.name) res.redirect(`./index.html`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
