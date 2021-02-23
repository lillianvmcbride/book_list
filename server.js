'use strict';

console.log('server.js is connected');

const express = require('express');
const superagent = require('superagent');
const ejs = require("ejs");

const PORT = process.env.PORT || 3000;
const app = express();

// set view engine and supply public files.
app.set('view engine', 'ejs');
app.use(express.static('public'));


// temporary routes
app.get('/hello', displayIndex);
app.post('/searches', searchBooks);

function displayIndex(req, res) {
  res.render('pages/index');
}

function searchBooks(req, res){
  const searchTerm = req.body.term;
  console.log(req.body);
}

// book constructor
function Book(_title, _author, _thumbnail, _link){
  this.title = _title;
  this.author = _author?_author:'Author Unknown';
  this.thumbnail = _thumbnail?_thumbnail:'https://i.imgur.com/J5LVHEL.jpg';
  this.link = _link;
}

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

