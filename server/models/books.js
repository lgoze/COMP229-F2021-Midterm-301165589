let mongoose = require('mongoose');

// create a model class
//Book == bookModel

let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  //collection: "books"
  collection: "books"
  
});

module.exports = mongoose.model('Book', Book);
