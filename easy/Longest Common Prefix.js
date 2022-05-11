const substrate = (str, size) => {
	return str.substr(0, size + 1);
};

const prefix = (current = "", next = "") => {
	let commonPrefix = "";

	for (let j = 0; j < current.length; j++) {
		if (next[j]) {
			if (substrate(current, j) === substrate(next, j)) {
				commonPrefix = substrate(current, j);
			}
		} else break;
	}

	return commonPrefix;
};

var longestCommonPrefix = function (strs) {
	let commonPrefix = "";

	if (strs.length === 1) {
		return strs[0];
	} else if (strs.length === 2) {
		commonPrefix = prefix(strs[0], strs[1]);
		return commonPrefix;
	} else {
		commonPrefix = prefix(strs[0], strs[1]);
		for (let i = 2; i < strs.length; i++) {
			if (!strs[i].startsWith(commonPrefix)) {
				const pre = commonPrefix;
				commonPrefix = prefix(strs[i], strs[i + 1] ? strs[i + 1] : strs[i - 1]);
				if (!pre.startsWith(commonPrefix) || commonPrefix === "") {
					commonPrefix = "";
					break;
				}
			}
		}

		return commonPrefix;
	}
};

console.log(longestCommonPrefix(["ca", "c", "bba", "bacb", "bcb"]));
