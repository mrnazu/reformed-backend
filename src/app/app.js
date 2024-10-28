const express = require("express");
const adminRouter = require("../routes/admin/adminAuthRoute");
const adminArticleRouter = require("../routes/admin/adminArticlesRoute");
const adminBooksRouter = require("../routes/admin/adminBooksRouter");
const homeRoute = require("../routes/homeRoute");

const app = express();

// Middleware
app.use(express.json());

// Home
app.use("/", homeRoute);

// Admin Routes
app.use("/api/v1/admin/auth", adminRouter);
app.use("/api/v1/admin/articles", adminArticleRouter);
app.use("/api/v1/admin/books", adminBooksRouter);

module.exports = app;