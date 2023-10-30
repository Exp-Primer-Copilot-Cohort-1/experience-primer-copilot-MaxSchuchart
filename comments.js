// create web server with nodejs
// run: node comments.js
// open browser and go to: http://localhost:8080
// to stop server: ctrl+c

var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

// create server
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    if (pathname == "/") {
        // read file
        fs.readFile('comments.html', function (err, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }
}); // <-- added closing parenthesis
