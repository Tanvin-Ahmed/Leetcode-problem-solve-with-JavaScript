/*
The Quest for Discounts

Digital Payments Limited (DPL), a subsidiary of Pathao Limited and widely recognized as Pathao Pay, has emerged as a prominent player in the fintech industry. Signing up for Pathao Pay is quick and hassle-free, where you simply provide your phone number, national ID, and a selfie. While Pathao Pay offers a wide array of features, an exciting new feature is on the horizon: exclusive discounts tailored to their valuable customers based on their names.

One unique aspect of Pathao Pay is its special emphasis on certain characters. The DPL engineers assign particular importance to the vowels A, E, I, O, and U, collectively known as DPL characters, while all other characters are categorized as non-DPL characters. When reading names from National ID Cards using OCR, sometimes characters are unclear and shown as '?'. These names have uppercase letters (A-Z) and '?' marks. The '?' can be replaced with any letter to complete the name.

A name (or string) is classified into one of three categories based on the following rules:

DPL100:
Contains three consecutive DPL characters, or
Contains five consecutive non-DPL characters, or
Meets both conditions.
DPL00:
Does not meet any of the above conditions.
DPL50:
Can be classified as both DPL100 and DPL00, depending on how '?' is replaced.
Discount Benefits:

DPL100 customers: Receive a 100% discount on transactions.
DPL50 customers: Receive a 50% discount on transactions.
DPL00 customers: Receive no discount (0%) on transactions.
The DPL engineers are too lazy to manually classify customer names. If you want to join the DPL family, help them automate the process and identify which customers belong to DPL100, DPL50, or DPL00!

Input Format

Input starts with an integer T (≤ 200), denoting the number of test cases.
Each case begins with a non-empty string with a length no more than 50.
Constraints

1≤∣S∣≤100 (length of the string).
The string contains only uppercase English letters (A-Z) and '?'.
Output Format

For each case of input, you have to print the case number and the result according to the description.

Sample Input 0

4
SHERLOCK
SH?RL?CK
SABA
MRPCMITTER
Sample Output 0

Case 1: 0%
Case 2: 50%
Case 3: 0%
Case 4: 100%
*/

//! give incorrect result -> not accepted
process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  const lines = input.trim().split("\n");
  const T = parseInt(lines[0], 10);

  for (let t = 1; t <= T; t++) {
    const name = lines[t].trim();
    const canBeDPL100 = canBeClassifiedAsDPL100(name);
    const canBeDPL00 = canBeClassifiedAsDPL00(name);

    if (canBeDPL100 && canBeDPL00) {
      console.log(`Case ${t}: 50%`);
    } else if (canBeDPL100) {
      console.log(`Case ${t}: 100%`);
    } else {
      console.log(`Case ${t}: 0%`);
    }
  }
});

function canBeClassifiedAsDPL100(name) {
  // Replace all '?' with DPL characters (vowels) and check
  const nameWithDPL = replaceQuestionMarks(name, true);
  if (checkDPL100Conditions(nameWithDPL)) {
    return true;
  }

  // Replace all '?' with non-DPL characters and check
  const nameWithNonDPL = replaceQuestionMarks(name, false);
  if (checkDPL100Conditions(nameWithNonDPL)) {
    return true;
  }

  return false;
}

function canBeClassifiedAsDPL00(name) {
  const nameWithDPL = replaceQuestionMarks(name, true);
  if (!checkDPL100Conditions(nameWithDPL)) {
    return true;
  }

  const nameWithNonDPL = replaceQuestionMarks(name, false);
  if (!checkDPL100Conditions(nameWithNonDPL)) {
    return true;
  }

  return false;
}

function replaceQuestionMarks(name, useDPL) {
  return name
    .split("")
    .map((char) => (char === "?" ? (useDPL ? "A" : "B") : char))
    .join("");
}

function checkDPL100Conditions(name) {
  // Check for 3 consecutive DPL characters
  for (let i = 0; i <= name.length - 3; i++) {
    if (
      isDPLChar(name[i]) &&
      isDPLChar(name[i + 1]) &&
      isDPLChar(name[i + 2])
    ) {
      return true;
    }
  }

  // Check for 5 consecutive non-DPL characters
  for (let i = 0; i <= name.length - 5; i++) {
    if (
      !isDPLChar(name[i]) &&
      !isDPLChar(name[i + 1]) &&
      !isDPLChar(name[i + 2]) &&
      !isDPLChar(name[i + 3]) &&
      !isDPLChar(name[i + 4])
    ) {
      return true;
    }
  }

  return false;
}

function isDPLChar(c) {
  return ["A", "E", "I", "O", "U"].includes(c);
}
