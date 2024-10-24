const express = require('express');
const adminRouter = require('../routes/admins/adminRouter');

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/admins', adminRouter);


module.exports = app;