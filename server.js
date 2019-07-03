var http = require('http');
var url = require('url');

function start(route) {
	function onRequest(request, response) {
		console.log('req received');
		var path = url.parse(request.url).pathname;

		route(path);

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('hi: ' + path);

		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log('server started');
}

exports.start = start;

