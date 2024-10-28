// src/routes/homeRoute.js

const express = require("express");
const homeRoute = express.Router();

homeRoute.get("/", (req, res) => {
    res.send("Welcome to the homepage!");
});

module.exports = homeRoute;