const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/reviewController');

router.post('/create', controller.createReview);
router.get('/list', controller.listReview);

module.exports = router;
