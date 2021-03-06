
const router = require('express').Router();
let Book = require('../../models/book.model');

router.route('/').get((req, res) => {
  Book.find()
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/retrieveByISBN').get((req, res) => {
  Book.find({isbn: req.body.isbn})
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/retrieveByAuthor').get((req, res) => {
  Book.find({author: req.body.author})
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const isbn = req.body.isbn;
    const description = req.body.description;
    const publisher = req.body.publisher;
    const genre = req.body.genre;
    const yearPublished = req.body.yearPublished;
    const price = req.body.price;
    const copiesSold = req.body.copiesSold;
    const rating = req.body.rating;
  
    const newBook = new Book({
      title,
      author,
      isbn,
      description,
      publisher,
      genre,
      yearPublished,
      price,
      copiesSold,
      rating,
    });
  
    newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  
  module.exports = router;


