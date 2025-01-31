const inRange = (num) => {
  return num <= Math.pow(2, 31) - 1 && num >= -Math.pow(2, 31);
};

const reverse = (x) => {
  let num = Math.abs(x);
  let reversedNum = 0;

  while (num) {
    const lastNumber = num % 10;
    reversedNum = reversedNum * 10 + lastNumber;
    num = Math.floor(num / 10);
  }

  if (x < 0) {
    if (!inRange(-reversedNum)) {
      return 0;
    }

    return -reversedNum;
  }

  if (!inRange(reversedNum)) {
    return 0;
  }
  return reversedNum;
};
