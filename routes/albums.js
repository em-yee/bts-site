const express = require('express');
const router = express.Router();

//localhost:3000/albums
router.get('/albums', (req, res) => {
  // res.send('albums');
  res.render('albums', {
    
  });
});



module.exports = router;
