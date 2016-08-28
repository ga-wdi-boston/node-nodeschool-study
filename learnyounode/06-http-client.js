'use strict';

// can't seem to get this one

const http = require('http')

let url = process.argv[2]

http.get(url, (response) => {
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
});
