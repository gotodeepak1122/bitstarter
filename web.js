var express = require('express');
var fs =require('fs');
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
var bufout =fs.readFileSync("index.hmtl"); 
 response.send(bufout.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
