const express = require('express');
const adminRouter = require('../routes/admin/adminAuthRoute');

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/admin', adminRouter);


module.exports = app;