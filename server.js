'use strict';

// set required node modules
const express = require('express');
const superagent = require('superagent');
const ejs = require('ejs');

const PORT = 3000;
const app = express();

// set view engine and supply public files.
app.set('view engine', 'ejs');
app.use(express.static('public'));


// temporary routes
app.get('/hello', function(req, res) {
  res.render('pages/index');
});


app.listen(PORT, () => console.log(`App is listening on PORT:  ${PORT}`));
