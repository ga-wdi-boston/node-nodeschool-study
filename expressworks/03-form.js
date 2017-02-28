var express = require('express');
var pug = require('pug');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
var app = express();
app.set('views', path.join(__dirname, '/form'));
app.set('view engine', 'pug');
