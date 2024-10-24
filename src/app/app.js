const express = require('express');

const app = express();

//middleware
app.use(express.json());

module.exports = app;