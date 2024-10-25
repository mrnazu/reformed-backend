const express = require('express');
const adminArticleRouter = express.Router();

// Fetch all articles
adminArticleRouter.get('/articles', (req, res) => {
  res.status(200).json({ message: 'retrieve all articles' });
});

// Fetch a single article by ID
adminArticleRouter.get('/articles/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `retrieve article with ID: ${id}` });
});

// Create a new article
adminArticleRouter.post('/articles', (req, res) => {
  res.status(201).json({ message: 'create a new article' });
});

// Update an existing article by ID
adminArticleRouter.put('/articles/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update article with ID: ${id}` });
});

// Delete an article by ID
adminArticleRouter.delete('/articles/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete article with id: ${id}` });
});

// Fetch all article categories
adminArticleRouter.get('/article-categories', (req, res) => {
  res.status(200).json({ message: 'retrieve all article categories' });
});

// Create a new article category
adminArticleRouter.post('/article-categories', (req, res) => {
  res.status(201).json({ message: 'create a new article category' });
});

module.exports = adminArticleRouter;