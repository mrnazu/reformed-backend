const express = require('express');
const adminArticleRouter = express.Router();

adminArticleRouter.get('/articles');
adminArticleRouter.get('/articles/:id');
adminArticleRouter.post('/articles');
adminArticleRouter.put('/articles/:id');
adminArticleRouter.delete('/articles/:id');

// Article Categories
adminArticleRouter.get('/article-categories');
adminArticleRouter.post('/article-categories');