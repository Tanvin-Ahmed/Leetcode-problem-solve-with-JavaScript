const isValid = (s) => {
  const stack = [];

  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const ch of s) {
    if (ch in brackets) {
      stack.push(ch);
    } else {
      if (ch !== brackets[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));
