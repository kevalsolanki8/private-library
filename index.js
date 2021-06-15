const generateId = (maxLength = 10) => {
	let text = "";
	let possible = "abcdefghijklmnopqrstuvwxyz";
	for (let i = 0; i < maxLength; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};

module.exports = {
	generateId,
};
