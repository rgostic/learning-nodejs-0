function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function start(response) {

    // Do something after the sleep!
    

    response.writeHead(200, {'Content-Type': 'text/html'});

	response.write(`
		<html>
		<head>
			<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
		</head>
		<body>
		<form action='/upload' method='POST'>
			<input type='text' />
			<input type='submit' value='Submit' />
		</form>
		</body>
		</html>
		`);

	response.end();

	console.log('Handler Start was called');
	
	
}

function upload(response) {
	console.log('Handler Upload was called');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('upload was called');
	response.end();

}

exports.start = start;
exports.upload = upload;