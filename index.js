const express = require('express');
const bodyParser= require('body-parser');
const routes = require('./server/routes');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-control-Allow-Headers', "origin X-Requested-width, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.listen(3000, () => {
  console.log('API running...');
});