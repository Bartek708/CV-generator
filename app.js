const express = require('express');
var app = express();
var path = require('path');
const fs = require('fs');
app.use(express.static('resources'));

app.set('views', './views')
app.set('view engine', 'pug');

let rawData = fs.readFileSync("data.json");
const data = JSON.parse(rawData);

app.get('/', (req, res) => {
    res.render('index', data );
});

app.get('/data', (req, res) => {
 res.json(data)
});


app.use("/static",
        express.static('resources'));

app.listen(process.env.PORT || 8080)
