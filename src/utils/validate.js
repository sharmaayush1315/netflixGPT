export const checkValidData = (fullName, emailPhone, password) => {
	const isFullNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(fullName);
	const isEmailPhoneValid =
		/^(?:\+?\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
			emailPhone
		);
	const isPasswordValid =
		/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

	if (!isFullNameValid) return `Please enter a valid name`;
	if (!isEmailPhoneValid) return `Please enter a valid email or phone number`;
	if (!isPasswordValid) return `Please enter a valid password`;
	return null;
};
