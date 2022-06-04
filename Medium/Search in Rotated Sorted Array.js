const binarySearch = (numbs, l, r, target) => {
	while (l < r) {
		const mid = Math.round((r - l) / 2 + l);
		if (numbs[mid] < target) l = mid + 1;
		else if (numbs[mid] > target) r = mid - 1;
		else return mid;
	}
	if (numbs[l] == target) return l;

	return -1;
};

var search = function (nums, target) {
	if (nums.length === 1) {
		if (nums[0] === target) return 0;
		return -1;
	}

	for (i = 1; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) {
			let result = binarySearch(nums, 0, i - 1, target);
			if (result !== -1) return result;
			result = binarySearch(nums, i, nums.length - 1, target);
			if (result !== -1) return result;

			return -1;
		}
	}
	return binarySearch(nums, 0, nums.length - 1, target);
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
