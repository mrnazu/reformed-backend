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
//devotionals
adminRouter.get('/devotionals');
//confession
adminRouter.get('/confession');


//books
adminRouter.get('/books'); // get all books
adminRouter.get('/books/:id'); // get single book
adminRouter.post('/books/:id'); // post book
adminRouter.delete('/books/:id'); // delete book
adminRouter.put('/books/:id'); // update or edit book

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