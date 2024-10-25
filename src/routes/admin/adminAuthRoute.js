const express = require('express');
const adminRouter = express.Router();

//Dashboard/Home (Admin)
adminRouter.get('/', (req, res) => {
    res.send({ message: 'Admin Home' });
});

//Auth
adminRouter.post("/register", (req, res) => {
    res.send({ message: 'Login successful' });
});

adminRouter.get("/register", (req, res) => {
    res.send({ message: 'Login successful' });
});

adminRouter.post("/login", (req, res) => {
    res.send({ message: 'Login successful' });
});

adminRouter.get("/login", (req, res) => {
    res.send({ message: 'Login successful' });
});

module.exports = adminRouter;