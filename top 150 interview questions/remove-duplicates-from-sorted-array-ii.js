// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

const removeDuplicates = (nums) => {
  let k = 1;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k++] = nums[i];
      count = 1;
    } else {
      if (count < 2) {
        nums[k++] = nums[i];
        count++;
      }
    }
  }

  return k;
};

const arr = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(arr));
console.log(arr);
