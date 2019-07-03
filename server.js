var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		console.log();
		console.log('req received');
		var path = url.parse(request.url).pathname;

		route(handle, path, response);		
	}

	http.createServer(onRequest).listen(8888);
	
	console.log('server started');

}

exports.start = start;

