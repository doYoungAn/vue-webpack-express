const express = require('express');
const router = express.Router();

const IMAGES = [
  'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
  'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
  'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
  'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
  'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
  'https://homepages.cae.wisc.edu/~ece533/images/mountain.png',
  'https://homepages.cae.wisc.edu/~ece533/images/tulips.png'
];

function random(min, max) {
  var randVal = Math.random() * (max - min) + min;
  return Math.floor(randVal);
}

const TODOS = [
  {
    _id: 1,
    title: 'Vue',
    image: IMAGES[0],
    content: '1주차는 Vue에 대해서 알아봅니다.'
  },
  {
    _id: 2,
    title: 'Angular',
    image: IMAGES[1],
    content: '2주차는 Angular에 대해서 알아봅니다.'
  },
  {
    _id: 3,
    title: 'React',
    image: IMAGES[2],
    content: '3주차는 React에 대해서 알아봅니다.'
  }
];

router.get('/todos', (req, res) => {
  console.log('[todos] read');
  res.status(200).json(TODOS);
});

router.post('/todo', (req, res) => {
  console.log('[todos] create', req.body);
  var todo = {
    _id: TODOS.length + 1,
    title: req.body.title,
    image: IMAGES[random(0, 8)],
    content: req.body.content,
  };
  TODOS.unshift(todo);
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