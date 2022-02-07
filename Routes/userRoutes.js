const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/userControllers');
const passport = require('passport');

router.post('/register', controller.registerUser);

// everything from here lower is protected
router.use(passport.authenticate('jwt', { session: false }));
router.get('/list', controller.listUsers);

module.exports = router;
