const express = require('express');
const adminBooksRouter = express.Router();

adminBooksRouter.get('/books');
adminBooksRouter.get('/books/:id');
adminBooksRouter.post('/books');
adminBooksRouter.put('/books/:id');
adminBooksRouter.delete('/books/:id');