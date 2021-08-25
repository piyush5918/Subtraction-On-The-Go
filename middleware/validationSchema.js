module.exports = {
  subtraction: (req, res, next) => ({
    numberOfQuestions: {
      exists: {
        errorMessage: 'Please enter Number of Questions'
      }
    },
    minuend: {
      exists: {
        errorMessage: 'Number of digits in Minuend is Missing'
      },
      custom: {
        options: (minuend, { req }) => {
          if (!Array.isArray(minuend)) {
            throw 'Minuend should be an array';
          }
          if (minuend.length !== req.body.numberOfQuestions) {
            throw 'Number of Minuend Digits not matching with Number of Questions.';
          }
          return true;
        }
      }
    },
    subtrahend: {
      exists: {
        errorMessage: 'Number of digits in Minuend is Missing'
      },
      custom: {
        options: (subtrahend, { req }) => {
          if (!Array.isArray(subtrahend)) {
            throw 'Subtrahend should be an array';
          }
          if (subtrahend.length !== req.body.numberOfQuestions) {
            throw 'Number of Subtrahend Digits not matching with Number of Questions.';
          }
          return true;
        }
      }
    }
  })
};
