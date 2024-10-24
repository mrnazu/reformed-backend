const express = require('express');
const adminRouter = express.Router();

//register
adminRouter.post("/register");
//login
adminRouter.post("/login");

//home
adminRouter.get('/');
//creed
adminRouter.get('/creed');
//books
adminRouter.get('/books');
//devotionals
adminRouter.get('/devotionals');
//confession
adminRouter.get('/confession');


//blogs
adminRouter.get('/blogs');
adminRouter.get('/blogs/catagory');

//update blog
adminRouter.put('/blogs/:id');
//delete blog
adminRouter.delete('/blogs/:id');
//write blog
adminRouter.put('/blogs/:id');


module.exports = adminRouter;