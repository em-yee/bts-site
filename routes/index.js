const express = require('express');
const jsonData = require('../data/data.json');

const router = express.Router();

//localhost:3000/

// router.get('/', (req, res) => {
//   // res.send('Home Page');
//   res.render('index', {
//
//   });
// });

router.get('/', (req, res) => {
  // res.send('Home Page');
  res.render('index', {
    data: jsonData,
  });
});

module.exports = router;
