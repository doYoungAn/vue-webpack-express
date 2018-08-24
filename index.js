const express = require('express');
const routes = require('./server/routes');
const app = express();
app.use('/api', routes);

app.listen(3000, () => {
  console.log('API running...');
});