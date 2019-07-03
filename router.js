
function route(handle, pathName, response, postData) {
	console.log('routing path for ' + pathName);
	if (typeof handle[pathName] === 'function') {
		return handle[pathName](response, postData);
	}
	else {
		console.log('no handler found for ' + pathName);
		return "404 not found";
	}
}

exports.route = route