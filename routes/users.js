const express = require('express');
const router = express.Router();

//Register User
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

//Authenticate User
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

//Validate User
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;
