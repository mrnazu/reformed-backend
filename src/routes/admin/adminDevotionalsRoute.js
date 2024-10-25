const express = require('express');
const adminDevotionalsRouter = express.Router();

adminDevotionalsRouter.get('/devotionals');
adminDevotionalsRouter.get('/devotionals/:id');
adminDevotionalsRouter.post('/devotionals');
adminDevotionalsRouter.put('/devotionals/:id');
adminDevotionalsRouter.delete('/devotionals/:id');