'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');

app.use(express.static('public'));

app.use((req, res) => {
//  const filePath = path.join(__dirname, 'public', '404.html');
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.use( (req, res) => {
  const filePath = path.join(__dirname, '404.html');
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

// The root argument refers to the root directory from which the static assets are
// to be served. The file to serve will be determined by combining req.url with the
// provided root directory. When a file is not found, instead of sending a 404
// response, this module will instead call next() to move on to the next middleware,
// allowing for stacking and fall-backs.
//express.static('/', req.url);
