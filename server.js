var http = require('http');

var server = http.server();

server.on('request', function(req, res) {
    res.end("It works!");
})