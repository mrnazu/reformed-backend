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
adminRouter.get('/blogs/catagory/');
adminRouter.get('/blogs/catagory/:catagoryName/');

//update blog
adminRouter.put('/blogs//blogs/catagory/:catagoryName/:id');
//delete blog
adminRouter.delete('/blogs/catagory/:catagoryName/:id');
//write blog
adminRouter.post('/blogs/catagory/:catagoryName/write');

module.exports = adminRouter;