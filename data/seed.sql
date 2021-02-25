INSERT INTO booklist (title, author, isbn, image_url, description) VALUES (
  'Dune',
  'Frank Herbert',
  'ISBN_13 9780441013593',
  'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  'Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.'
);

INSERT INTO booklist (title,author, isbn, image_url, description) VALUES('Goodnight Moon',
' Margaret Wise Brown',
'9780062662897',
'http://books.google.com/books/content?id=dJNoDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
'In this classic of children''s literature, beloved by generations of readers and listeners, the quiet poetry of the words and the gentle, lulling illustrations combine to make a perfect book for the end of the day. In a great green room, tucked away in bed, is a little bunny. "Goodnight room, goodnight moon." And to all the familiar things in the softly lit room—to the picture of the three little bears sitting on chairs, to the clocks and his socks, to the mittens and the kittens, to everything one by one—the little bunny says goodnight. One of the most beloved books of all time, Goodnight Moon is a must for every bookshelf and a time-honored gift for baby showers and other special events.');

-- psql -d books_app -f data/schema.sql
-- psql -d books_app -f data/seed.sql