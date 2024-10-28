// src/routes/authRoute.js

const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    res.send("login endpoint for users and admins");
});

router.post("/signup", (req, res) => {
    res.send("signup endpoint for users and admins");
});

module.exports = router;
