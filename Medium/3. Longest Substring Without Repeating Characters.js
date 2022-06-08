const lengthOfLongestSubstring = s => {
	if (!s.length) return 0;

	let substrLength = 1;
	const substring = [];

	for (let i = 0; i < s.length; i++) {
		const element = s[i];

		if (substring.includes(element)) {
			substrLength = Math.max(substrLength, substring.length);

			for (let j = 0; j < substring.length; j++) {
				if (substring[j] === element) {
					substring.splice(0, j + 1);
					break;
				}
			}
		}
		substring.push(element);
	}

	return Math.max(substring.length, substrLength);
};

console.log(lengthOfLongestSubstring("abcabcbb"));
