const longestCommonSubsequence = (text1, text2) => {
	const n = text1.length;
	const m = text2.length;

	if (n === 0 || m === 0) return 0;

	const dp = new Array(n + 1);

	for (let i = 0; i <= m; i++) {
		dp[i] = [];
	}

	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= m; j++) dp[i][j] = 0;
	}

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if (text1[i - 1] === text2[j]) {
				dp[i][j] = 1 + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	return dp[n][m];
};

const t1 = "abaaba";
const t2 = "babbab";

console.log(longestCommonSubsequence(t1, t2));
