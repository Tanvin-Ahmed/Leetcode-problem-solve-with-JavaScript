const searchInsert = (numbs, target) => {
	let l = 0;
	let r = numbs.length - 1;
	let position = -1;
	const n = numbs.length - 1;

	if (!numbs.length) {
		return 0;
	}

	while (l <= r) {
		const mid = Math.round((r - l) / 2 + l);
		if (numbs[mid] > target) {
			r = mid - 1;
			if (numbs[n] > target && numbs[mid] > target) position = mid;
			else position = mid;
		} else if (numbs[mid] < target) {
			l = mid + 1;
			if (numbs[n] > target && numbs[mid] > target) position = mid + 1;
			else position = mid + 1;
		} else return mid;
	}

	return position;
};

console.log(searchInsert([8], 7));
