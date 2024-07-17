import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const fullName = useRef(null);
	const emailPhone = useRef(null);
	const password = useRef(null);
	function toggleForm() {
		setIsSignIn(!isSignIn);
	}
	function handleClick() {
		setErrorMessage(
			checkValidData(
				fullName.current.value,
				emailPhone.current.value,
				password.current.value
			)
		);

		// console.log(emailPhone.current.value);
		// console.log(password.current.value);
	}
	return (
		<div className="h-screen flex  flex-col relative">
			<Header />
			<div className=" flex-grow relative ">
				<img
					className="w-full h-full object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
					alt="Netflix-background-image"
				/>
				<form
					onSubmit={(e) => e.preventDefault()}
					className="absolute  inset-0  w-4/12 h-[54%] mx-auto mt-44 mb-8 bg-black bg-opacity-75 rounded-lg p-8"
				>
					<h1 className="text-white text-4xl font-bold py-4 m-2 top-8">
						{isSignIn ? 'Sign In' : 'Sign Up'}
					</h1>
					{!isSignIn && (
						<input
							type="text"
							ref={fullName}
							placeholder="Enter full name"
							className="p-4 my-4 focus:border-solid focus:border-2 w-full bg-gray-700 	 rounded-md text-white"
						/>
					)}
					<input
						type="text"
						ref={emailPhone}
						placeholder="Email or mobile number"
						className="p-4 my-4 focus:border-solid focus:border-2 w-full bg-gray-700 	  rounded-md text-white"
					/>
					<input
						type="password"
						ref={password}
						placeholder="Password"
						className="p-4 my-4 focus:border-solid focus:border-2 w-full bg-gray-700  rounded-md text-white"
					/>
					<p className="text-red-500 px-4 py-2 font-semibold text-[18px]">
						{errorMessage}
					</p>
					<button
						onClick={handleClick}
						className="w-full my-4 px-4 py-4 text-xl font-semibold bg-red-600 hover:bg-red-700 duration-200 rounded-md text-white"
					>
						{isSignIn ? 'Sign In' : 'Sign Up'}
					</button>

					<p className="text-white m-4	 text-gray-300">
						{isSignIn ? 'New to NetflixGPT?' : 'Already registered?'}
						<span
							className="cursor-pointer ml-1 text-[1.25rem]  text-white font-semibold hover:underline"
							onClick={toggleForm}
						>
							{isSignIn ? 'Sign up now' : 'Login now'}
						</span>
						.
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
