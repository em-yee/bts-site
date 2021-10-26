const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));

//templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/chatbot'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

module.exports = app;
