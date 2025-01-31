const removeElement = (nums, val) => {
  let k = 0; // Keeps track of the count of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Place the non-val element at the current position k
      k++; // Increment k
    }
  }

  return k; // Return the count of elements not equal to val
};

// Example 1
let nums1 = [3, 2, 2, 3];
let val1 = 3;
let k1 = removeElement(nums1, val1);
console.log(k1, nums1.slice(0, k1)); // Output: 2, [2, 2]

// Example 2
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let k2 = removeElement(nums2, val2);
console.log(k2, nums2.slice(0, k2)); // Output: 5, [0, 1, 3, 0, 4]
