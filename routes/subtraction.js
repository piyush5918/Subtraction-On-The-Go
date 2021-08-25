const express = require('express');

const router = express.Router();
const { checkSchema, validationResult } = require('express-validator');
const controller = require('../controllers/subtraction');
const httpStatusCodeConfig = require('../config/httpStatusCodes.json');
const validationSchema = require('../middleware/validationSchema');

router.post('/subtract', checkSchema(validationSchema.subtraction()), (req, res, next) => {
  try {
    validationResult(req).throw();
    controller.subtraction(req, res, next);
  } catch (error) {
    error.message = error.errors && error.errors[0] ? error.errors[0].msg : error.message;
    return res.status((error && error.status) || httpStatusCodeConfig.badRequest).send({
      api_status_code: error.status || httpStatusCodeConfig.badRequest,
      api_status_description: error.message || 'Bad Request'
    });
  }
});

module.exports = router;
