/*
Bamboo Cutting

Saffiyah loves to play with different DIY projects. Sometimes she uses bamboo sticks for her DIY projects. One day she took some bamboo sticks of the same length and cut them randomly until all parts were at most 50 units long. Now she wants to return the bamboo sticks to their original state, but she forgot how many bamboo sticks she had originally and how long they were originally. Please help her and write a program that calculates the smallest possible original length of those bamboo sticks. All lengths expressed in units are integers greater than zero.

Input Format

The input file contains blocks of 2 lines. The first line contains the number of bamboo stick parts after cutting. The second line contains the lengths of those parts separated by the space.

Constraints

All integers will be less than 10000 and greater than 0 except the last line of the file contains "0", which denotes the end of test cases.

Output Format

The output file contains the smallest possible length of original bamboo sticks, one per line.

Sample Input 0

9
5 2 1 5 2 1 5 2 1
4
1 2 3 4
0
Sample Output 0

6
5
*/

process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";

process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  const lines = input.trim().split("\n");
  let index = 0;

  while (index < lines.length) {
    let n = parseInt(lines[index]);
    if (n === 0) break;

    let lengths = lines[index + 1].split(" ").map(Number);
    let totalSum = lengths.reduce((sum, val) => sum + val, 0);
    let maxLen = Math.max(...lengths);

    lengths.sort((a, b) => b - a);

    for (let originalLen = maxLen; originalLen <= totalSum; originalLen++) {
      if (totalSum % originalLen === 0) {
        if (
          canFormOriginalLengths(lengths, totalSum / originalLen, originalLen)
        ) {
          console.log(originalLen);
          break;
        }
      }
    }

    index += 2;
  }
});

const canFormOriginalLengths = (lengths, targetCount, originalLen) => {
  let used = new Array(lengths.length).fill(false);
  return backtrack(lengths, used, 0, 0, originalLen, targetCount);
};

const backtrack = (
  lengths,
  used,
  index,
  currentSum,
  originalLen,
  remainingSticks
) => {
  if (remainingSticks === 0) return true;
  if (currentSum === originalLen)
    return backtrack(lengths, used, 0, 0, originalLen, remainingSticks - 1);

  for (let i = index; i < lengths.length; i++) {
    if (used[i] || currentSum + lengths[i] > originalLen) continue;

    used[i] = true;
    if (
      backtrack(
        lengths,
        used,
        i + 1,
        currentSum + lengths[i],
        originalLen,
        remainingSticks
      )
    )
      return true;
    used[i] = false;

    if (currentSum === 0) break;
    while (i + 1 < lengths.length && lengths[i] === lengths[i + 1]) i++;
  }
  return false;
};
