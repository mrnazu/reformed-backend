const express = require('express');
const adminCreedRouter = express.Router();

// Fetch all creeds
adminCreedRouter.get('/creeds', (req, res) => {
  res.status(200).json({ message: 'retrieve all creeds' });
});

// Fetch a single creed by ID
adminCreedRouter.get('/creeds/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `retrieve creed with id: ${id}` });
});

// Create a new creed
adminCreedRouter.post('/creeds', (req, res) => {
  res.status(201).json({ message: 'create a new creed' });
});

// Update an existing creed by ID
adminCreedRouter.put('/creeds/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update creed with id: ${id}` });
});

// Delete a creed by ID
adminCreedRouter.delete('/creeds/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete creed with id: ${id}` });
});

module.exports = adminCreedRouter;