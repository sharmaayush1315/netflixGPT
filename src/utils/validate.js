export const checkValidData = (email, password, fullName) => {
	console.log(email, password, fullName);
	const isFullNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(fullName);
	const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	const isPasswordValid =
		/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

	if (!isEmail) return `Please enter a valid email`;
	if (!isPasswordValid) return `Please enter a valid password`;
	if (!isFullNameValid) return `Please enter a valid name`;
	return null;
};
