var express = require('express');
var app = express();
var path = require('path');

var server = app.listen(8080, 'localhost', function() {
  console.log("howdy universe from Gini's heroku solo on local server");
});
app.get('/', function (req, res) {
  console.log("howdy from Gini's base url get heroku solo");
  res.writeHead(200);
  res.write("here here I am in Gini's base url for heroku solo");
  res.end();
});
