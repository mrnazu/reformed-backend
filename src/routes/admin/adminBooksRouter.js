const express = require('express');
const adminBooksRouter = express.Router();

// Fetch all books
adminBooksRouter.get('/books', (req, res) => {
  res.status(200).json({ message: 'retrieve all books' });
});

// Fetch a single book by ID
adminBooksRouter.get('/books/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `retrieve book with ID: ${id}` });
});

// Create a new book
adminBooksRouter.post('/books', (req, res) => {
  res.status(201).json({ message: 'create a new book' });
});

// Update an existing book by ID
adminBooksRouter.put('/books/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update book with id: ${id}` });
});

// Delete a book by ID
adminBooksRouter.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete book with id: ${id}` });
});

module.exports = adminBooksRouter;