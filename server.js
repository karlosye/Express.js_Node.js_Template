const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('<h1>Hello World.</h1>');
});

app.get('/contact', function(req,res){
    res.send('Contact me at karlosye@live.com')
});

app.get('/about',function(req,res){
    res.send('Hello My name is Karlos Ye')
});

app.listen(port, function () {
    console.log(`Server initiated at port ${port}`)
});

