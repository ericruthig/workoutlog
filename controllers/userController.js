const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/register', (req, res) => {
    res.send('testing register controller');
});

router.post('/register', (req, res) => {
    User.create({
        username: req.body.username,
        passwordhash: bcrypt.hashSync(req.body.passwordhash, 10),
    })
    .then(user =>{
        let token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "1d"})
    res.status(200).json({user, token})
    })
    .catch(error => res.status(500).send({
        message: 'User not created!', 
        error: error.errors[0].message
    }))
});

router.post('/login', (req, res) => {
    user.findOne({ 
        where: { 
            username: req.body.username 
        }
    })
    .then(user => {
        res.send(user)
        if(user){
            bcrypt.compare(req.body.password,user.password, function(err, matches){
                matches ? generateToken(user) : res.send('Incorrect Password!')
            })
            function generateToken(user) {
                let token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1d' });
                res.send({user, token})
            }
        } else {
            res.send('No user found')
        }
        // res.send(user)
    })
});

// router.get('/register', function(req,res){
//     res.send('Register');
// });

module.exports = router;