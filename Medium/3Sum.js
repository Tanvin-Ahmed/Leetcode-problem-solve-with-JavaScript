const threeSum = numbs => {
	numbs = numbs.sort((a, b) => a - b);
	const result = [];
	for (let i = 0; i < numbs.length; i++) {
		let l = i + 1;
		let r = numbs.length - 1;

		while (l < r) {
			const n1 = numbs[i];
			const sum = n1 + numbs[l] + numbs[r];
			if (sum === 0) {
				result.push([n1, numbs[l], numbs[r]]);
				while (l < r && numbs[l] === numbs[l + 1]) l++;
				while (l < r && numbs[r] === numbs[r - 1]) r--;
			} else if (sum > 0) r--;
			else l++;
		}

		while (i + 1 < numbs.length && numbs[i] === numbs[i + 1]) l++;
	}
	return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
