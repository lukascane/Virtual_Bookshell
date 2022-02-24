const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('./../Controllers/booksController');

router.post('/create', controller.createBooksCollection);
router.get('/list', controller.listBooks);
router.get('/searchtitle', controller.searchTitle);
router.delete('/delete/:id', controller.deleteBook);

router.use(passport.authenticate('jwt', { session: false }));

router.get('/listbyuser', controller.listBooksByUser);

module.exports = router;
