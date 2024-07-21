import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebaseConfig';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_BG } from '../utils/constants';

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();
	const fullName = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	function toggleForm() {
		setIsSignIn(!isSignIn);
	}
	function handleClick() {
		const message = checkValidData(
			email.current.value,
			password.current.value,
			isSignIn ? null : fullName.current.value
		);
		setErrorMessage(message);
		if (message) return;
		if (!isSignIn) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: fullName.current.value,
					})
						.then(() => {
							const { uid, email, displayName } = auth.currentUser;
							dispatch(
								addUser({ uid: uid, email: email, displayName: displayName })
							);
						})
						.catch((error) => {});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		}
	}
	return (
		<div className="h-screen flex  flex-col relative">
			<Header />
			<div className=" flex-grow relative ">
				<img
					className="w-full h-full object-cover"
					src={NETFLIX_BG}
					alt="Netflix-background-image"
				/>
				<form
					onSubmit={(e) => e.preventDefault()}
					className="absolute  inset-0  w-4/12 h-[54%] mx-auto mt-44 mb-8 bg-black bg-opacity-75 rounded-lg p-8"
				>
					<div className="absolute inset-0 m-6 mx-10 max-h-[90%]">
						<h1 className="text-white text-4xl font-bold py-4 m-2 top-8">
							{isSignIn ? 'Sign In' : 'Sign Up'}
						</h1>
						{!isSignIn && (
							<input
								type="text	"
								ref={fullName}
								placeholder="Enter full name"
								className="p-4 my-4 focus:border-solid focus:border-2 w-full bg-gray-700 	 rounded-md text-white"
							/>
						)}
						<input
							type="text"
							ref={email}
							placeholder="Enter your email"
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

						<p className="text-white m-4 text-gray-300">
							{isSignIn ? 'New to NetflixGPT?' : 'Already registered?'}
							<span
								className="cursor-pointer ml-1 text-[1.25rem]  text-white font-semibold hover:underline"
								onClick={toggleForm}
							>
								{isSignIn ? 'Sign up now' : 'Login now'}
							</span>
							.
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
