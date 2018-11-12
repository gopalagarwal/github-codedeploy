var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Helllooooo everybody 4!');
});
server.listen(80);
