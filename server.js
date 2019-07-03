var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		console.log();
		console.log('req received');
		var path = url.parse(request.url).pathname;
		var postData = '';

		request.setEncoding('utf8');

		request.addListener('data', function(postDataChunk) {
			postData += postDataChunk;
			console.log('received chunk');
			postDataChunk + "'.";
		});

		request.addListener('end', function() {
			route(handle, path, response, postData);
		});
		
	}

	http.createServer(onRequest).listen(8888);

	
	console.log('server started');

}

exports.start = start;

