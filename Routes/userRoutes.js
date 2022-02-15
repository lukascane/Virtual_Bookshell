const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/userControllers');
const passport = require('passport');
const { sanitizeUser, validateUser } = require('../Middleware/validationUser');
const roleManager = require('../Middleware/roleManager')

router.post('/register', validateUser, sanitizeUser, controller.registerUser);
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/list', controller.listUsers);
// everything from here lower is protected

router.use(passport.authenticate('jwt', { session: false }));

router.delete('/delete/:id', roleManager.isAdmin,controller.deleteUser)
router.patch('/update', controller.updateUser)
module.exports = router;
