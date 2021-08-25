module.exports = {
  subtraction: (req, res, next) => ({
    numberOfQuestions: {
      exists: {
        errorMessage: 'Please enter Number of Questions'
      }
    },
    borrow: {
      exists: {
        errorMessage: 'Borrow Boolean is Missing'
      },
      isBoolean: {
        errorMessage : "Borrow should be a Boolean true/false"
      }
    },
    minuend: {
      exists: {
        errorMessage: 'Number of digits in Minuend is Missing'
      },
      custom: {
        options: (minuend, { req }) => {
          if (!Array.isArray(minuend) || !Array.isArray(req.body.subtrahend)) {
            throw 'Minuend/Subtrahend should be an array';
          }
          if (minuend.length !== req.body.numberOfQuestions || req.body.subtrahend.length !== req.body.numberOfQuestions) {
            throw 'Number of Minuend/Subtrahend Digits not matching with Number of Questions.';
          }
          let isEveryDigitPositive = minuend.every( digit  => digit > 0);
          if (isEveryDigitPositive == false) {
            throw 'Number of Digits cant be less than or equal to 0'
          }
          return true;
        }
      }
    },
    subtrahend: {
      exists: {
        errorMessage: 'Number of digits in Subtrahend is Missing'
      },
      custom: {
        options: (subtrahend, { req }) => {
          let isEveryDigitPositive = subtrahend.every( digit  => digit > 0);
          if (isEveryDigitPositive == false) {
            throw 'Number of Digits cant be less than or equal to 0'
          }
          subtrahend.forEach((element, index) => {
            if (element > req.body.minuend[index]) {
              throw 'Number of Digits in Subtrahend cant be greater than Minuend in order to avoid negative results'
            }
          })
          return true;
        }
      }
    }
  })
};
