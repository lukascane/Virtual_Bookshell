const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/userControllers');
const passport = require('passport');
const { sanitizeUser, validateUser } = require('../Middleware/validationUser');

router.post('/register', validateUser, sanitizeUser, controller.registerUser);
router.post('/login', controller.login);
router.get('/logout', controller.logout);

// everything from here lower is protected

router.use(passport.authenticate('jwt', { session: false }));
router.get('/list', controller.listUsers);

module.exports = router;
