const express = require ("express");
const path = require ("path");
const session = require('express-session');
const api = require('./src/api');
const fetch = require("node-fetch");

const app = express();

app.use(express.json());
app.use(session({
    secret: 'this is required but only really useful if we are using https, which we are not',
    resave: false,
    saveUninitialized: false,
}));

app.use('/src/api', api);
app.use(express.static("src/pages"));
app.use(express.static(path.join(__dirname, 'src')));

module.exports = app;
app.listen(8080);
console.log("Website running on: http://127.0.0.1:8080")
