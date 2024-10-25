const express = require("express");
const adminRouter = require("../routes/admin/adminAuthRoute");
const adminArticleRouter = require("../routes/admin/adminArticlesRoute");
const adminBooksRouter = require("../routes/admin/adminBooksRouter");
const adminConfessionsRouter = require("../routes/admin/adminConfessionsRoute");
const adminCreedRouter = require("../routes/admin/adminCreedRoute");
const adminDevotionalsRouter = require("../routes/admin/adminDevotionalsRoute");

const app = express();

// Middleware
app.use(express.json());

// Admin Routes
app.use("/api/v1/admin/auth", adminRouter); // Authentication routes
app.use("/api/v1/admin/articles", adminArticleRouter); // Article routes
app.use("/api/v1/admin/books", adminBooksRouter); // Book routes
app.use("/api/v1/admin/confessions", adminConfessionsRouter); // Confession routes
app.use("/api/v1/admin/creeds", adminCreedRouter); // Creed routes
app.use("/api/v1/admin/devotionals", adminDevotionalsRouter); // Devotional routes

module.exports = app;