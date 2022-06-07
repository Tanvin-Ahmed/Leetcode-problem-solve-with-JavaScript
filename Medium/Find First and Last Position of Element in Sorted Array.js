const firesPosition = (numbs, target) => {
	let l = 0;
	let r = numbs.length - 1;
	let position = -1;

	while (l <= r) {
		const mid = Math.round((r - l) / 2 + l);

		if (numbs[mid] > target) r = mid - 1;
		else if (numbs[mid] < target) l = mid + 1;
		else {
			position = mid;
			l = mid + 1;
		}
	}
	return position;
};

const secondPosition = (numbs, target) => {
	let l = 0;
	let r = numbs.length - 1;
	let position = -1;

	while (l <= r) {
		const mid = Math.round((r - l) / 2 + l);

		if (numbs[mid] > target) r = mid - 1;
		else if (numbs[mid] < target) l = mid + 1;
		else {
			position = mid;
			r = mid - 1;
		}
	}
	return position;
};

var searchRange = function (numbs, target) {
	const position = [];

	if (!numbs.length) return [-1, -1];
	else {
		position.push(firesPosition(numbs, target));
		position.push(secondPosition(numbs, target));
	}

	return position.sort((a, b) => a - b);
};

console.log(searchRange([1, 1, 2], 1));
