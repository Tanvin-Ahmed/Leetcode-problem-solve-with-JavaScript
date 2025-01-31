const addTwoNumbers = (l1, l2) => {
	const m1 = l1.reverse();
	const m2 = l2.reverse();
	let n1 = "",
		n2 = "";
	for (let i = 0; i < m1.length; i++) n1 += m1[i].toString();
	for (let i = 0; i < m2.length; i++) n2 += m2[i].toString();

	const result = Number(n1) + Number(n2);

	return result
		.toString()
		.split("")
		.map(n => Number(n))
		.reverse();
};

console.log(addTwoNumbers([0], [0]));
