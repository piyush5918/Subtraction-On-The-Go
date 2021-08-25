module.exports = {
  // Generates a random number of mentioned number of digits.
  getMinuend: (minuendDigits) => {
    const start = 10 ** (minuendDigits - 1);
    const end = 10 ** minuendDigits - 1;
    return Math.floor(Math.random() * (end - start)) + start;
  },
  /*
   * If Borrow is TRUE - This Utility Function generates a subtrahend which is lesser than minued - just to avoid negative results
   * If Borrow is FALSE - This Utility Function generates a subtrahend where each digit is less than that is present in Minuend.
   * Example ---> Borrow = False ---> Minuend - 234 , Subtrahend - 121.
   */
  getSubtrahend: (subtrahendDigits, firstNumber, borrow) => {
    const rangeStart = 10 ** (subtrahendDigits - 1);
    let secondNumber;
    const rangeEnd =
      firstNumber && firstNumber.toString().length === subtrahendDigits
        ? firstNumber
        : 10 ** subtrahendDigits - 1;
    if (borrow === true) {
      secondNumber = Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart;
    } else {
      secondNumber = firstNumber
        ? firstNumber
            .toString()
            .split('')
            .map((element) => Math.floor(Math.random() * (element - 1) + 1))
        : Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart;
      secondNumber = secondNumber.join('');
    }
    return parseInt(secondNumber, 10);
  },
  // Generates Options similar to the correct answer and then shuffles the options.
  getOptions: (firstNumber, secondNumber) => {
    const options = [];
    let currentIndex;
    let randomIndex;
    const correctAnswer = firstNumber - secondNumber;
    options.push(correctAnswer * 2);
    options.push(correctAnswer);
    options.push(Math.floor(Math.random() * correctAnswer));
    options.push(Math.floor(Math.random() * firstNumber));
    // Shuffling the options
    currentIndex = options.length;

    // While elements are remaining to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [options[currentIndex], options[randomIndex]] = [options[randomIndex], options[currentIndex]];
    }
    return options;
  }
};
