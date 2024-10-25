const express = require('express');
const adminRouter = express.Router();

//Auth
adminRouter.post("/register");
adminRouter.post("/login");

//Dashboard/Home (Admin)
adminRouter.get('/');

// Articles
adminRouter.get('/articles');
adminRouter.get('/articles/:id');
adminRouter.post('/articles');
adminRouter.put('/articles/:id');
adminRouter.delete('/articles/:id');

// Article Categories
adminRouter.get('/article-categories');
adminRouter.post('/article-categories');

module.exports = adminRouter;