'use strict';

let express = require('express');
let app = express();
let port = process.argv[2];
	
app.put('/message/:id', (request, response) => {
  let id = request.params.id;
  let str = require('crypto')
            .createHash('sha1')
            .update(new Date().toDateString() + id)
            .digest('hex');
          response.send(str);
});

app.listen(port);
