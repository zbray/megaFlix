const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.send('Login'))

//Register Page...in case we decide we want a register page
router.get('/register', (req, res) => res.send('Register'))

module.exports = router;