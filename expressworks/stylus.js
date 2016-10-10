'use strict';

let express = require('express');
let app = express();


app.use(require('stylus').middleware(process.argv[3] || 'public'));
app.use(express.static(process.argv[3] || 'public'));

app.get('/main.css', function(req, res) {
});

app.listen(process.argv[2]);
