
// Set up the express package: 
const express = require('express');
const app = express();
let port = 3000;

// Set up the bodyParser package:
const bodyParser = reqiure('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the 'https' package:
const https = require('https');

// Set up the 'public' package to load static stuff like CSS and images
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('<h1>Hello World.</h1>');
});

app.listen(port, function () {
    console.log(`Server initiated at port ${port}`)
});

