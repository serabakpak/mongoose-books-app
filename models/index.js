//manifest - lists out all the model files 


var mongoose = require("mongoose");

//connect to db
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require('./book.js');
//module.exports.Author = require('.author.js');