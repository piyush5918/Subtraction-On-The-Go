const async = require('async');
const httpStatusCodeConfig = require('../config/httpStatusCodes.json');
const helperUtils = require('../utils/controllerUtils');

module.exports = {
  subtraction: async (req, res, next) => {
    const { minuend, subtrahend, borrow } = req.body;
    const funcsArray = [];
    // Iterating over all questions and doing the calculations parallely
    minuend.forEach((firstNumberDigits, index) => {
      funcsArray.push((callback) => {
        const result = {};
        const secondNumberDigits = subtrahend[index];
        const firstNumber = helperUtils.getMinuend(firstNumberDigits);
        const secondNumber = helperUtils.getSubtrahend(secondNumberDigits, firstNumber, borrow);
        const options = helperUtils.getOptions(firstNumber, secondNumber);
        result[`Question ${index + 1}`] = {};
        result[`Question ${index + 1}`].Minuend = firstNumber;
        result[`Question ${index + 1}`].Subtrahend = secondNumber;
        result[`Question ${index + 1}`].correctAnswer = firstNumber - secondNumber;
        result[`Question ${index + 1}`].options = options;
        callback(null, result);
      });
    });
    async.parallel(funcsArray, (error, data) => {
      if (error) {
        return res.status(error.status || httpStatusCodeConfig.internalServerError).send({
          status: error.status || httpStatusCodeConfig.internalServerError,
          message: error.message || 'Something went wrong'
        });
      }
      return res.status(httpStatusCodeConfig.oK).send(data);
    });
  }
};
