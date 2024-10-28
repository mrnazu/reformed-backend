const express = require("express");

const adminArticleRouter = require("../routes/admin/adminArticlesRoute");
const adminBooksRouter = require("../routes/admin/adminBooksRouter");
const homeRoute = require("../routes/homeRoute");
const authRoute = require("../routes/authRoute");
const userBooksRoute = require("../routes/user/userBooksRoute");
const userConfessionRoute = require("../routes/user/userConfessionsRoute");
const userCreedRoute = require("../routes/user/userCreedsRoute");

const app = express();

// Middleware
app.use(express.json());

// Home and Auth
app.use("/", homeRoute);
app.use('/api/v1/auth', authRoute);

// Admin Routes
app.use("/api/v1/admin/articles", adminArticleRouter);
app.use("/api/v1/admin/books", adminBooksRouter);

// User Routes
app.use("/api/v1/user/books", userBooksRoute);
app.use("/api/v1/user/confessions", userConfessionRoute);
app.use("/api/v1/user/creeds", userCreedRoute);

module.exports = app;