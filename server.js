var http = require('http');
var url = require('url');
var formidable = require('formidable');
var sys = require('sys');

function start(route, handle) {
	function onRequest(request, response) {


		if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
			var form = new formidable.IncomingForm();
			form.parse(request, function(error, fields, files) {
				response.writeHead(200, {'content-type': 'text/plain'});
				response.write('received upload:\n\n');
				response.end(sys.inspect({fields:fields, files: files}));
			})

			return;
		}

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

