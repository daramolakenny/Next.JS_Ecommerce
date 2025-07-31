const express = require('express');
const router = express.Router();
const { loginClient, registerClient } = require('../controllers/auth-controller');

router.post('/login', loginClient);
router.post('/register', registerClient);

module.exports = router;