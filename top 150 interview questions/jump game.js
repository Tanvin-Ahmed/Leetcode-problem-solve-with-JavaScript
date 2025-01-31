// https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canJump = (nums) => {
  const n = nums.length;
  if (!n || n === 1) return true;

  let maxReach = 0;
  for (let i = 0; i < n; i++) {
    if (i > maxReach) return false;

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= n - 1) return true;
  }

  return false;
};

const nums = [2, 0, 0];
console.log(canJump(nums));
