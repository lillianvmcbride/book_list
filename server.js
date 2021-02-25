'use strict';

console.log('server.js is connected');

require('dotenv').config();
const express = require('express');
const superagent = require('superagent');
const ejs = require('ejs');
const pg = require('pg');
pg.defaults.ssl = process.env.NODE_ENV === 'production' && { rejectUnauthorized: false };

const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL);

const PORT = process.env.PORT || 3000;
const app = express();

// set view engine and supply public files.
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// temporary routes

app.get('/', displayIndex);
app.get('/searches/new', newSearch);
app.post('/searches', searchBooks);

function displayIndex(req, res) {
  console.log('attempting to call up the index...')
  const sqlQuery = 'SELECT * FROM booklist;';
  console.log(sqlQuery);
  client.query(sqlQuery).then(results => {
    console.log('making sql query');
    console.log(results);
    const books = results.rows;
    console.log(books);
    res.render('pages/index.ejs', {books: books});
  }).catch(error => {
    res.status(500).send('Error in client query');
    //console.log(error);
  });
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
    .then(results => {
      res.render('pages/searches/show.ejs',{results: results});
      console.log(results);
    });
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
  this.isbn = bookObject.industryIdentifiers[0].identifier;
  // console.log('🍙', bookObject.imageLinks);
  // console.log('🍙🍱', bookObject.imageLinks.thumbnail?true:false);
  this.thumbnail = bookObject.imageLinks?(bookObject.imageLinks.thumbnail?bookObject.imageLinks.thumbnail:'https://i.imgur.com/J5LVHEL.jpg'):'https://i.imgur.com/J5LVHEL.jpg';
  this.description = bookObject.description;
  this.link = bookObject.infoLink;
  // console.log(this);
}

client.connect();

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
