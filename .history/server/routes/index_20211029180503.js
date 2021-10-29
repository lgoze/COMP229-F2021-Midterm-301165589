// Lester Dan Goze
// 301165589
// COMP229-F2021
// MIDTERM
// October 29, 2021

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
//let book = require('../models/books');
let Book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
