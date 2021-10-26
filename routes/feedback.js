const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

//read and write to file
const fs = require('fs');

//import the contents of json file
const feedbackData = require('../data/feedback.json'); //converted to js object

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/feedback', (req, res) => {
    res.render('feedback', {
        data: feedbackData,
    })
})

router.post('/feedback', (req, res) => {

    //grab data from header (body parser)
    let {name, title, message} = req.body;

    console.log(req.body);

    //push it to the feedbackData obj
    feedbackData.unshift(req.body) //js object

    //save to feedback.json file
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{

        if(err){
            console.log(err);
        }

        console.log('feedback.json file has been updated');
    } )
    //send back all of the messages with new message attached
    res.json(feedbackData)
    res.redirect(request.get('referer'));
})

router.delete('/api', (req, res)=>{

})





module.exports = router;
