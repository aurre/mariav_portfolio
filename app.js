const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('.'));

app.post('/', (req, res, next) => {
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
