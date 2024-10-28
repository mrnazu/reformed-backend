// src/routes/authRoute.js

const express = require("express");
const authRoute = express.Router();

authRoute.post("/login", (req, res) => {
    res.send("login endpoint for users and admins");
});

authRoute.post("/signup", (req, res) => {
    res.send("signup endpoint for users and admins");
});

module.exports = authRoute;
