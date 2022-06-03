var findMedianSortedArrays = function (nums1, nums2) {
	const numArr = [...nums1, ...nums2].sort((a, b) => a - b);
	const index = Math.round((numArr.length - 1) / 2);
	if (numArr.length % 2 !== 0) {
		return numArr[index];
	} else {
		return (numArr[index] + numArr[index - 1]) / 2;
	}
};

// for testing purpose code
const nums1 = [1, 2];
const nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
