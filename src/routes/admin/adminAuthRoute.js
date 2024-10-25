const express = require('express');
const adminRouter = express.Router();

//Auth
adminRouter.post("/register");
adminRouter.post("/login");

//Dashboard/Home (Admin)
adminRouter.get('/');

//Confessions
adminRouter.get('/confessions');
adminRouter.get('/confessions/:id');
adminRouter.post('/confessions');
adminRouter.put('/confessions/:id');
adminRouter.delete('/confessions/:id');

//Devotionals
adminRouter.get('/devotionals');
adminRouter.get('/devotionals/:id');
adminRouter.post('/devotionals');
adminRouter.put('/devotionals/:id');
adminRouter.delete('/devotionals/:id');

//Books
adminRouter.get('/books');
adminRouter.get('/books/:id');
adminRouter.post('/books');
adminRouter.put('/books/:id');
adminRouter.delete('/books/:id');

//Book Categories
adminRouter.get('/book-categories');
adminRouter.post('/book-categories');

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