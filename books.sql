DROP TABLE IF EXISTS booklist;

CREATE TABLE booklist(
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    author VARCHAR,
    imageUrl VARCHAR,
    isbn VARCHAR,
    book_description TEXT
);

INSERT INTO booklist (title,author,imageUrl,isbn,book_description) VALUES('Children of Dune',' Frank Herbert','http://books.google.com/books/content?id=ehPvzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api','147323378X','The epic that began with the HUGO and NEBULA Award-winning classic DUNE -- now a major motion picture from the director of Blade Runner 2049 and Arrival -- continues ... The sand-blasted world of Arrakis has become green, watered and fertile. Old Paul Atreides, who led the desert Fremen to political and religious domination of the galaxy, is gone. But for the children of Dune, the very blossoming of their land contains the seeds of its own destruction. The altered climate is destroying the giant sandworms, and this in turn is disastrous for the planet''s economy. Leto and Ghanima, Paul Atreides''s twin children and his heirs, can see possible solutions - but fanatics begin to challenge the rule of the all-powerful Atreides empire, and more than economic disaster threatens ..');
INSERT INTO booklist (title,author,imageUrl,isbn,book_description) VALUES('Goodnight Moon',' Margaret Wise Brown','http://books.google.com/books/content?id=dJNoDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api','9780062662897','In this classic of children''s literature, beloved by generations of readers and listeners, the quiet poetry of the words and the gentle, lulling illustrations combine to make a perfect book for the end of the day. In a great green room, tucked away in bed, is a little bunny. "Goodnight room, goodnight moon." And to all the familiar things in the softly lit room—to the picture of the three little bears sitting on chairs, to the clocks and his socks, to the mittens and the kittens, to everything one by one—the little bunny says goodnight. One of the most beloved books of all time, Goodnight Moon is a must for every bookshelf and a time-honored gift for baby showers and other special events.');
