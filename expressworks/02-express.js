'use strict';

let express = require('express');
let app = express();
let port = process.argv[2];
let file = process.argv[3];

app.use(express.static(file || path.join(__dirname, 'public')));

app.listen(port);
