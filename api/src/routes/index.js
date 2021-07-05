const {Router} = require('express');
const router = Router();
const users = require('../models/users.js');


router.post('/home', (req,res)=>{
    const {name} = req.body;
    const hola = new users({user_name: name});
    hola.save();

    res.sendStatus(200);
});


module.exports = router;