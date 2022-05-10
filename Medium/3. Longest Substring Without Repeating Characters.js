var lengthOfLongestSubstring = function (s) {
	let substring = "";
	let substring2 = "";
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (!substring.includes(char)) {
			if (!substring2) substring = substring.concat(char);
			console.log(substring);
		} else {
			for (let j = i - 1; j <= s.length; j++) {
				const char1 = s[j];
				if (char1) {
					if (!substring2.includes(char1)) {
						substring2 = substring2.concat(char1);
						if (substring.length <= substring2.length) {
							substring = substring2;
						}
					} else {
						if (substring.length <= substring2.length) {
							substring = substring2;
						} else {
							substring2 = "";
						}
					}
				} else break;
			}
		}
	}

	return substring;
};

console.log(lengthOfLongestSubstring("anviaj"));
