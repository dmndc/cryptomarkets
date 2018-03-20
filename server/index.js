const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

// Require routes
require('./routes')(app);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Test!'
  })
);

// Server port
const port = 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
