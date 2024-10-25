const express = require('express');
const adminConfessionsRouter = express.Router();

// Fetch all confessions
adminConfessionsRouter.get('/confessions', (req, res) => {
  res.status(200).json({ message: 'retrieve all confessions' });
});

// Fetch a single confession by ID
adminConfessionsRouter.get('/confessions/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `retrieve confession with id: ${id}` });
});

// Create a new confession
adminConfessionsRouter.post('/confessions', (req, res) => {
  res.status(201).json({ message: 'create a new confession' });
});

// Update an existing confession by ID
adminConfessionsRouter.put('/confessions/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update confession with id: ${id}` });
});

// Delete a confession by ID
adminConfessionsRouter.delete('/confessions/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete confession with id: ${id}` });
});

module.exports = adminConfessionsRouter;