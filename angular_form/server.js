const express = require('express');
const path = require('path');
const app = express();

app.use('*', (req, res, next) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

module.exports = app;
