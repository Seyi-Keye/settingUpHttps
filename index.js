const path = require('path');
const fs = require('fs');
const express = require('express');
const https = require('https');

const certOptions = {
  key: fs.readFileSync(path.resolve('build/cert/server.key')),
  cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
};

const app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

const server = https.createServer(certOptions, app).listen(3000, () => console.log('App listening on port 3000'));
