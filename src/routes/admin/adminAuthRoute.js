const express = require('express');
const adminRouter = express.Router();

//Auth
adminRouter.post("/register");
adminRouter.post("/login");

//Dashboard/Home (Admin)
adminRouter.get('/');


module.exports = adminRouter;