const express = require('express');
const adminRouter = require('../routes/admin/adminAuthRoute');
const adminArticleRouter = require('../routes/admin/adminArticlesRoute');
const adminBooksRouter = require('../routes/admin/adminBooksRouter');

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/admin', adminArticleRouter);
app.use('/api/v1/admin', adminBooksRouter);


module.exports = app;