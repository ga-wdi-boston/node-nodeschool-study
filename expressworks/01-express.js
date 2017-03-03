'use strict';

const express = require('express');
let app = express();

app.use(express.static(process.argv[3] || path.join(process.argv[3], 'public')));

app.listen(process.argv[2]);
