const express = require('express');
const app = express();
const port = 3000;

//view static assets
app.use(express.static('public'));

//templates
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));
app.use(require('./routes/albums'));

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
