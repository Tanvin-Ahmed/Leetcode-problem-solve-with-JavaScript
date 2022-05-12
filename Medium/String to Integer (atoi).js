const value = numStr => {
	const num = Number(numStr);
	if (num > 2147483647) return 2147483647;
	else if (num < -2147483648) return -2147483648;
	else return num;
};

var myAtoi = function (s) {
	let numberStr = "";
	for (let i = 0; i < s.length; i++) {
		const element = s[i];
		if (element === " ") {
			if (numberStr.length) break;
			else continue;
		} else if ("0123456789".includes(element)) {
			numberStr += element;
		} else if (element === "-" || element === "+") {
			if (
				numberStr[numberStr.length - 1] === "-" ||
				numberStr[numberStr.length - 1] === "+"
			) {
				numberStr = numberStr.substring(0, numberStr.length - 1);
				break;
			} else if ("1234567890".includes(numberStr[numberStr.length - 1])) {
				numberStr = numberStr.substring(0, numberStr.length);
				break;
			} else numberStr += element;
		} else {
			break;
		}
	}

	if (numberStr.length) {
		if (
			numberStr.startsWith("+-") ||
			numberStr.startsWith("-+") ||
			numberStr.startsWith("++") ||
			numberStr.startsWith("--") ||
			(numberStr.length === 1 && (numberStr[0] === "-" || numberStr[0] === "+"))
		) {
			return 0;
		}
		return value(numberStr);
	}
	return 0;
};

// ? Testing purpose console.log, it is not the logical part of the code.
console.log(myAtoi("   -115579378e25"));
