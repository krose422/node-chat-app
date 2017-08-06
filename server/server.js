const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '../public');

var app = express();
var port = 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started on port ${port}`)
});

module.exports = {app};
