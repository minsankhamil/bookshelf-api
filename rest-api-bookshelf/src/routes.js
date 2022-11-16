const addBookHandler = require('./addBookHandler.js');
const getAllBookHandler = require('./getAllBookHandler.js');
const getBookByIdHandler = require('./getBookByIdHandler.js');
const editBookByIdHandler = require('./editBookByIdHandler.js');
const deleteBookByIdHandler = require('./deleteBookByIdHandler.js');
  
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
    },
    {
      method: 'GET',
      path: '/books',
      handler: getAllBookHandler,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: getBookByIdHandler,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookByIdHandler,
    },
  ];
  
  module.exports = routes;