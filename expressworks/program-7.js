'use strict';

const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  let query = req.query;
  res.send(query);
});

app.listen(process.argv[2]||3000);
