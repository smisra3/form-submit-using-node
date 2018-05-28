const express = require('express');
const app = express();
const fs = require('file-system');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.listen(3000, function (error) {
    error ? console.log("Error is: ", error) : console.log("BAM!! Server up on 3000....");
});

app.get('/', function (req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (!err)
            res.write(data);
        res.end();
    })
});

app.get('/status', function (req, res) {
    fs.readFile(__dirname + '/post.json', function (err, data) {
        err ? console.log(err) : res.send(JSON.parse(data));
    });
});

app.post('/status/new', function (req, res) {
    var request = JSON.stringify({ "name": req['body']['name'], "age": req['body']['age'] });
    fs.writeFile(__dirname + '/post.json', request, function (error, data) {
        if (error) {
            console.log(error);
        }
    });
})