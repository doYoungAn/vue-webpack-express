const express = require('express');
const routes = require('./server/routes');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-control-Allow-Headers', "otigin X-Requested-width, Content-Type, Accept");
  next();
})

app.use('/api', routes);

app.listen(3000, () => {
  console.log('API running...');
});