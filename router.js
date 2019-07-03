
function route(handle, pathName, response) {
	console.log('routing path for ' + pathName);
	if (typeof handle[pathName] === 'function') {
		return handle[pathName](response);
	}
	else {
		console.log('no handler found for ' + pathName);
		return "404 not found";
	}
}

exports.route = route