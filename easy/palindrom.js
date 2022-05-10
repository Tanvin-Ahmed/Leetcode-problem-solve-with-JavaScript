var isPalindrome = function (x) {
	if (x == Number(x.toString().split("").reverse().join(""))) return true;
	return false;
};

console.log(isPalindrome(221));
