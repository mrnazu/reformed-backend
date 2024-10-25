const express = require('express');
const adminDevotionalsRouter = express.Router();

// Fetch all devotionals
adminDevotionalsRouter.get('/devotionals', (req, res) => {
  res.status(200).json({ message: 'retrieve all devotionals' });
});

// Fetch a single devotional by ID
adminDevotionalsRouter.get('/devotionals/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `retrieve devotional with id: ${id}` });
});

// Create a new devotional
adminDevotionalsRouter.post('/devotionals', (req, res) => {
  res.status(201).json({ message: 'create a new devotional' });
});

// Update an existing devotional by ID
adminDevotionalsRouter.put('/devotionals/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update devotional with id: ${id}` });
});

// Delete a devotional by ID
adminDevotionalsRouter.delete('/devotionals/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete devotional with id: ${id}` });
});

module.exports = adminDevotionalsRouter;