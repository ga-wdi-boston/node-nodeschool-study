'use strict';

var fs = require('fs');
let importF = require('./import.js');

importF.readThisFile(process.argv[2], process.argv[3]);
