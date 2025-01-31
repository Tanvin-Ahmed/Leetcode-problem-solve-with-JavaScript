// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);

  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      count++;
      if (Math.floor(nums.length / 2) < count) {
        return nums[i];
      }
    } else count = 1;
  }
};

console.log(majorityElement([3, 2, 3]));
