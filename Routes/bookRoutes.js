const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/booksController');

router.post('/create', controller.createBooksCollection);
router.get('/list', controller.listBooks);
router.get('/searchtitle', controller.searchTitle);
router.delete('/delete/:id', controller.deleteBook);

module.exports = router;
