var express = require('express');
var app = express();
//var config = require("./config.json"); If I ever need a database I have a config ready
var routes = require("./routes/pianos")();

app.use(routes);

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Listening at http://%s:%s', host, port)

});