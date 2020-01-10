var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();

app.use(cors());
app.use(express.static('./public'));

app.listen(3880, function () {
    console.log('Hello, Miss Kytra! We are successfully listening on port 3880!');
});