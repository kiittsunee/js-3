const getNumberExplanation = (number) => {
    switch (number) {
      case 666:
        return 'devil number';
      case 42:
        return 'answer for everything';
      case 7:
        return 'prime number';
      default:
        return 'just a number';
    }
  };

  console.log(getNumberExplanation(8));   // just a number
  console.log(getNumberExplanation(666)); // devil number
  console.log(getNumberExplanation(42));  // answer for everything
  console.log(getNumberExplanation(7));   // prime number