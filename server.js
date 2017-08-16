const express = require('express');
var scoreWithIcon = require('./scoreWithIcon.js');
const app = express();
const port = 8081;

app.get('/', function (req, res) {
  res.send('This is the image generator for Aotal assessment images');
})

app.get('/scoreWithIcon.png', function (req, res, next) {
  res.setHeader('Content-Type', 'image/png');
  scoreWithIcon(req).pngStream().pipe(res);
});

app.listen(port, function () {
  console.log('Aotal assessment image generator app up and listening on ' + port);
})

