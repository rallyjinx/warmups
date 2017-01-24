const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request');
const cheerio = require('cheerio');
const app = express()

app.use(bodyParser.json())

app.get('/scrape', function(req, res){
  url = 'https://octodex.github.com/'
  request(url, function(error, response, html) {
    if(!error) {
      var $ = cheerio.load(html);
      var image;
      var json = { image : ""}
    }
  })
})

app.listen('8000');
console.log('listening on port 8000');
module.exports = app;
