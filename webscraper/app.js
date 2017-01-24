let cheerio = require('cheerio');
let request = require('request');

request('https://octodex.github.com/', function(error, response, body) {
  if (!error && repsonse.statusCode == 200) {
    console.log(body);
  }
});
