const express = require('express');
const adminConfessionsRouter = express.Router();

adminConfessionsRouter.get('/confessions');
adminConfessionsRouter.get('/confessions/:id');
adminConfessionsRouter.post('/confessions');
adminConfessionsRouter.put('/confessions/:id');
adminConfessionsRouter.delete('/confessions/:id');