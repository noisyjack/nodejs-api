var express = require('express');
const router = express.Router()


module.exports = router;

//get all

router.get('/', (req, res) => { 
    res.send('Subs Home');

})

//get one

router.get('/:id', (req, res) => { 
    res.send(req.params.id);

})

//create one

router.post('/', (req, res) => { 


})

//update one

router.patch('/:id', (req, res) => { 


})

//delete one

router.delete('/:id', (req, res) => { 


})