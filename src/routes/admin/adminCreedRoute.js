const express = require('express');
const adminCreedRouter = express.Router();

adminCreedRouter.get('/creeds');
adminCreedRouter.get('/creeds/:id');
adminCreedRouter.post('/creeds');
adminCreedRouter.put('/creeds/:id');
adminCreedRouter.delete('/creeds/:id');