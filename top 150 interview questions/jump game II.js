// https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */

const jump = (nums) => {
  const n = nums.length;
  if (!n || n === 1) return 0;

  let currentEnd = 0;
  let minStep = 0;
  let farthest = 0;

  for (let i = 0; i < n; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      minStep++;
      currentEnd = farthest;

      if (currentEnd >= n - 1) break;
    }
  }

  return minStep;
};

const nums = [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3];
console.log(jump(nums));
