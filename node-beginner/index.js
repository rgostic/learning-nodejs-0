var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');
var handles = {};

handles['/'] = requestHandler.start;
handles['/start'] = requestHandler.start;
handles['/upload'] = requestHandler.upload;



server.start(router.route, handles);