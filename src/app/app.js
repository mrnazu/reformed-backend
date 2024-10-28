const express = require("express");

const adminArticleRouter = require("../routes/admin/adminArticlesRoute");
const adminBooksRouter = require("../routes/admin/adminBooksRouter");
const homeRoute = require("../routes/homeRoute");
const authRoute = require("../routes/authRoute");

const app = express();

// Middleware
app.use(express.json());

// Home
app.use("/", homeRoute);

// Auth
app.use('/api/v1/auth', authRoute);

// Admin Routes
app.use("/api/v1/admin/articles", adminArticleRouter);
app.use("/api/v1/admin/books", adminBooksRouter);

module.exports = app;