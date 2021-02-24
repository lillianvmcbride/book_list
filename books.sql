DROP TABLE IF EXISTS booklist;

CREATE TABLE booklist(
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    author VARCHAR,
    imageUrl VARCHAR,
    isbn VARCHAR,
    book_description TEXT
);

INSERT INTO booklist (title,author,imageUrl,isbn,book_description) VALUES('Book','A. Guy','../img/','3455554345','A test booklet to see if the file connects.');
INSERT INTO booklist (title,author,imageUrl,isbn,book_description) VALUES('Tao Te Ching','Lao Tzu','../img/','2222222222','The way.');
