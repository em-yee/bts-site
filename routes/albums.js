const express = require('express');
const jsonData = require('../data/data.json');

const router = express.Router();

//localhost:3000/albums
router.use('/public', express.static(__dirname + '/public'));

router.get('/albums', (req, res) => {
  // res.send('albums');
  res.render('albums', {
    data: jsonData.albums
  });
});

module.exports = router;
