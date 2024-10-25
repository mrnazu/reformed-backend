const express = require('express');
const adminBooksRouter = express.Router();

adminBooksRouter.get('/books');
adminBooksRouter.get('/books/:id');
adminBooksRouter.post('/books');
adminBooksRouter.put('/books/:id');
adminBooksRouter.delete('/books/:id');

//Book Categories
adminBooksRouter.get('/book-categories');
adminBooksRouter.post('/book-categories');