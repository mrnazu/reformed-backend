const express = require('express');
const adminRouter = require('../routes/admin/adminAuthRoute');
const adminArticleRouter = require('../routes/admin/adminArticlesRoute');
const adminBooksRouter = require('../routes/admin/adminBooksRouter');
const adminConfessionsRouter = require('../routes/admin/adminConfessionsRoute');
const adminCreedRouter = require('../routes/admin/adminCreedRoute');

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/admin', adminArticleRouter);
app.use('/api/v1/admin', adminBooksRouter);
app.use('/api/v1/admin', adminConfessionsRouter);
app.use('/api/v1/admin', adminCreedRouter);


module.exports = app;