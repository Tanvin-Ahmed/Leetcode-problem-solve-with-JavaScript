const addDigits = (num) => {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  if (sum >= 10) {
    return addDigits(sum);
  }
  return sum;
};

console.log(addDigits(38));
