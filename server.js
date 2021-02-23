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
app.use(express.urlencoded({extended: true}));

// temporary routes

app.get('/hello', displayIndex);
app.get('/searches/new', newSearch);
app.post('/searches', searchBooks);

function displayIndex(req, res) {
  res.render('pages/index');
}

function newSearch(req, res){
  res.render('pages/searches/new');
}

function searchBooks(req, res){
  // console.log('req body', req.body);
  const searchQuery = req.body.searchQuery;
  // console.log('🐱‍👤',searchQuery);
  const searchType = req.body.searchType;
  // console.log('🍱',searchType);
  const url = `https://www.googleapis.com/books/v1/volumes?q=+in${searchType}:${searchQuery}`;

  superagent(url)
    .then((results) => results.body.items.map(bookResults => new Book(bookResults.volumeInfo)))
    .then(results => res.render('pages/searches/show.ejs',{results: results}));
  // .then(library => {
  //   const mapBooks = library.body.items.map(books => )
  //   console.log ('📚',books.body.items);
  // });
  // res.render('pages/searches/show');
}

// book constructor
function Book(bookObject){
  this.title = bookObject.title;
  this.author = bookObject.authors?bookObject.authors[0]:'Author Unknown';
  // console.log('🍙', bookObject.imageLinks);
  // console.log('🍙🍱', bookObject.imageLinks.thumbnail?true:false);
  this.thumbnail = bookObject.imageLinks?(bookObject.imageLinks.thumbnail?bookObject.imageLinks.thumbnail:'https://i.imgur.com/J5LVHEL.jpg'):'https://i.imgur.com/J5LVHEL.jpg';
  this.description = bookObject.description;
  this.link = bookObject.infoLink;
  // console.log(this);
}

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

