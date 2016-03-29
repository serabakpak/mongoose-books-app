console.log("Sanity Check: JS is working!");
var $booksList;

$(document).ready(function(){

  $booksList = $('#bookTarget');

  // compile handlebars template
  var source = $('#books-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/books',
    success: handleSuccess,
    error: handleError
  });

});


function handleSuccess(json) {
  var books = json;

  // pass in data to render in the template
  var booksHtml = template({ books: books });

  // append html to the view
  $booksList.append(booksHtml);
}

function handleError(e) {
  console.log('uh oh');
  $('#bookTarget').text('Failed to load books, is the server working?');
}
