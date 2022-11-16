const { nanoid } = require('nanoid');
const books = require('./books');


const getAllBookHandler = (request, h) => {
    const { name, reading, finished } = request.query;
  
    let filteringBooks = books;
    if (name !== undefined) {
      filteringBooks = filteringBooks.filter((book) => book
        .name.toLowerCase().includes(name.toLowerCase()));
    }
    if (reading !== undefined) {
      filteringBooks = filteringBooks.filter((book) => book.reading === !! Number(reading));
    }
    if (finished !== undefined) {
      filteringBooks = filteringBooks.filter((book) => book.finished === !! Number(finished));
    }
  
    const response = h.response({
      status: 'success',
      data: {
        books: filteringBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  };

  module.exports = getAllBookHandler;