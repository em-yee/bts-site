const express = require('express');
const jsonData = require('../data/data.json');

const router = express.Router();

//localhost:3000/albums

// router.use(express.static(path.join('../public')));
router.use('/public', express.static(__dirname + '/public'));

router.get('/albums', (req, res) => {
  res.render('albums', {
    data: jsonData.albums,
    json: JSON.stringify(jsonData),
  });
});

module.exports = router;
