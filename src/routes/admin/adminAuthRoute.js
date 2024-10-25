const express = require('express');
const adminRouter = express.Router();

//Dashboard/Home (Admin)
adminRouter.get('/');

//Auth
adminRouter.post("/register");
adminRouter.post("/login");

module.exports = adminRouter;