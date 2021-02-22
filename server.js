'use strict';
console.log('server.js is connected');

const express = require('express');
const superagent = require('superagent');
const ejs = require("ejs");

const PORT = 3000;
const app = express();

//set view engine
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

//serve static css files
app.use(express.static('public'))

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));