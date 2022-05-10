var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		const number = nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			const element = nums[j];
			if (number + element === target) {
				return [i, j];
			}
		}
	}
};

const nums = [3, 3];
const target = 6;

console.log(twoSum(nums, target));
