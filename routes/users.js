const express = require('express');
const router = express.Router();


// Login page
router.get('/login', (req, res) => res.render('login'));

// Register page
router.get('/register', (req, res) => res.render('register'));

// Register handle...so when we submit registration form make a post request to /users/register
router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('hello');
});

module.exports = router;