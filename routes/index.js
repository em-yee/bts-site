const express = require('express');
const router = express.Router();

//localhost:3000/
router.get('/', (req, res) => {
  // res.send('Home Page');
  res.render('index', {

  });
});




module.exports = router;
