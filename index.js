const express = require('express')
const app = express()
//const os = require('os');

//const port = 8080;
const port = process.env.PORT ?? 8080;

const defaultMessage = 'Simple App Running';
app.get('/', function (req, res) {
  res.send('Hello node.js');
});
app.get('/app/', function (req, res) {
  const message = req.query.name ?? defaultMessage;
  res.send('Hello, ' + message);
});
app.listen(port, function () {
  console.log('Hello app listening on port ' + port);
});
