const express = require('express');
const router = express.Router();

router.get('/todos', (req, res) => {
  console.log('[todos] read');
  res.status(200).json([
    {
      _id: 1,
      title: 'Vue',
      content: '1주차는 Vue에 대해서 알아봅니다.'
    },
    {
      _id: 2,
      title: 'Angular',
      content: '2주차는 Angular에 대해서 알아봅니다.'
    },
    {
      _id: 3,
      title: 'React',
      content: '3주차는 React에 대해서 알아봅니다.'
    }
  ]);
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