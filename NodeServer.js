var express = require('express');
var path = require('path');
var server = express();
var url = require('url');

server.get('/', function (req, res) {
    // res.render('index.html',{});
    res.sendFile(path.join(__dirname + '/index.html'));
});


server.get('*', function (req, res) {
    var paths = url.parse(req.url).pathname;
    res.sendFile(path.join(__dirname + paths));
});


server.listen(8800);