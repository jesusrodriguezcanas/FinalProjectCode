const express = require('express');
const { signup, login } = require('../controllers/loginController');
const {verifyToken} = require('../middlewares/auth');
const { generateToken} = require('../utils/utils');
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.get('/refresh-token', verifyToken, generateToken);

module.exports= router;

