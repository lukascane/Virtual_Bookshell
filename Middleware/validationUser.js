const { body, validationResult } = require('express-validator');
const { capitalizeFirstLetter } = require('../Helpers/sanitizationhelpers');

module.exports.validateUser = [
  body('firstname')
    .exists()
    .trim()
    .isAlphanumeric('fr-FR', 'de-DE', 'en-US')
    .withMessage('firstname should be alphanumeric')
    .isLength({ min: 1, max: 50 })
    .withMessage(
      'firstname should not be empty, should be more than one and less than 50 characters'
    ),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ titel: 'Validation errors firstname', error: errors });
    }

    next();
  },

  body('lastname')
    .exists()
    .trim()
    .isAlphanumeric('fr-FR', 'de-DE', 'en-US')
    .withMessage('lastname should be alphanumeric')
    .isLength({ min: 1, max: 50 })
    .withMessage(
      'lastname should not be empty, should be more than one and less than 50 characters'
    ),

  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ titel: 'Validation errors lastname', error: errors });
    }

    next();
  },

  body('email')
    .exists()
    .trim()
    .isEmail()
    .withMessage('This is not a valid email'),

  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ titel: 'Validation errors email', error: errors });
    }

    next();
  },

  body('password')
    .notEmpty()
    .isString()
    .isLength({ min: 8 })
    .withMessage('The password has to be minimum 8 characters'),

  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ titel: 'Validation errors password', error: errors });
    }

    next();
  },
];

module.exports.sanitizeUser = [
  body('email').normalizeEmail(),

  function (req, res, next) {
    req.body.firstname = capitalizeFirstLetter(req.body.firstname);
    req.body.lastname = capitalizeFirstLetter(req.body.lastname);

    next();
  },
];
