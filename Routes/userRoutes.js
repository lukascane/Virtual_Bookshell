const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/userControllers');

router.post('/register', controller.registerUser);
router.get('/list', controller.listUsers);

module.exports = router;
