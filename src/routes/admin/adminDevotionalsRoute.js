const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/devotionals');
adminRouter.get('/devotionals/:id');
adminRouter.post('/devotionals');
adminRouter.put('/devotionals/:id');
adminRouter.delete('/devotionals/:id');