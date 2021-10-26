const express = require('express');

const router = express.Router();


router.get('/chatbot', (req, res) => {
    // res.send('Hello World')
    res.render('chatbot', {
        pageTitle: 'Chat with Army!',
        pageID: "chat"
    } )
})

module.exports = router;
