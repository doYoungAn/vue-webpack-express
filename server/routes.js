const express = require('express');
const router = express.Router();

router.get('/todos', (req, res) => {
  console.log('[todos] read');
  res.status(200).json({});
});

router.post('/todos', (req, res) => {
  console.log('[todos] create');
  res.status(200).json({});
});

router.put('/todos/:id', (req, res) => {
  console.log('[todos] update');
  res.status(200).json({});
});

router.delete('/todos/:id', (req, res) => {
  console.log('[todos] delete');
  res.status(200).json({});
});

module.exports = router;