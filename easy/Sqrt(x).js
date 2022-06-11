const mySqrt = x => {
	let l = 0;
	let r = x;
	let root = -1;

	while (l <= r) {
		const mid = Math.round((r - l) / 2 + l);
		const square = mid * mid;

		if (square === x) return mid;
		else if (square > x) r = mid - 1;
		else if (square < x) {
			l = mid + 1;
			root = mid;
		}
	}

	return root;
};

console.log(mySqrt(6));
