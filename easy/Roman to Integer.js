const roman = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

var romanToInt = function (s) {
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		if (roman[s[i]] === 1 && roman[s[i + 1]] === 5) {
			result += 4;
			i++;
		} else if (roman[s[i]] === 1 && roman[s[i + 1]] === 10) {
			result += 9;
			i++;
		} else if (roman[s[i]] === 10 && roman[s[i + 1]] === 50) {
			result += 40;
			i++;
		} else if (roman[s[i]] === 10 && roman[s[i + 1]] === 100) {
			result += 90;
			i++;
		} else if (roman[s[i]] === 100 && roman[s[i + 1]] === 500) {
			result += 400;
			i++;
		} else if (roman[s[i]] === 100 && roman[s[i + 1]] === 1000) {
			result += 900;
			i++;
		} else result += roman[s[i]];
	}

	return result;
};

console.log(romanToInt("MCMXCIV"));
