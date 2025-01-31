// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const rotate = (nums, k) => {
  const n = nums.length;
  k = k % n; // handle if k this greater than n

  // 1st reverse entire array
  reverse(nums, 0, n - 1);

  // 2nd reverse array from 0 to k - 1 index
  reverse(nums, 0, k - 1);

  // 3rd reverse array from k to n - 1 index
  reverse(nums, k, n - 1);
};

const nums = [-1, -100, 3, 99];
rotate(nums, 2);

console.log(nums);
