var maxArea = function (height) {
	let max_area = 0;
	let l = 0;
	let r = height.length - 1;

	while (l < r) {
		max_area = Math.max(max_area, Math.min(height[l], height[r]) * (r - l));
		if (height[l] < height[r]) l++;
		else r--;
	}
	return max_area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
