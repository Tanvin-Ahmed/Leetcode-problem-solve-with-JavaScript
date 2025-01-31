// https://leetcode.com/problems/candy/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
  const n = ratings.length;
  const data = ratings.map((_, i) => i).sort((a, b) => a - b);
  const candies = Array(n).fill(1);

  for (const i of data) {
    // compare with left
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      candies[i] = Math.max(candies[i], candies[i - 1] + 1);
    }

    // compare with right
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((acc, candies) => acc + candies, 0);
};

console.log(candy([1, 2, 87, 87, 87, 2, 1])); // Output: 12
