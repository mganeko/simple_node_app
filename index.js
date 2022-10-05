const express = require('express')
const app = express()
const os = require('os');
const port = 8080;
const helloMessage = 'Simple App Running';
app.get('/', function (req, res) {
  res.send('Hello node.js');
});
app.get('/app/', function (req, res) {
  res.send('Hello, ' + helloMessage);
});
app.listen(port, function () {
  console.log('Hello app listening on port ' + port);
});
