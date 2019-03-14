const express = require('express');
var app = express();
var path = require('path');
var data = require('./data.json');
app.use(express.static('resources'));

function pet(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}



/*
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + '/index.html'))
});
*/

app.get('/', function(req, res) {
    

    res.render(__dirname + '/info.ejs', {
        data: data
    });
});

app.get('/data', (req, res) => {
 res.json(data)
});

app.get('/pictures', function(req, res) {
    
    res.render(__dirname + '/pictures.ejs', {
        pets: pets
    });
});

app.use("/static",
        express.static('resources'));

app.listen(process.env.PORT || 8080)
