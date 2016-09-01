var mongoose = require('mongoose'), //using the mongoose library
	Schema = mongoose.Schema; //calling Schema class on mongoose

//create book schema
var BookSchema = new Schema({
	title: String,
	author: String,
	image: String,
	releaseDate: String
});

//creating book model
var Book = mongoose.model('Book', BookSchema);

//exporting Book model to be used elsewhere
module.exports = Book;