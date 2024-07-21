import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { signIn, signOut as signout } from '../utils/authSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSignout = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, displayName, email } = user;
				dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
				dispatch(signIn());
				navigate('/browse');
			} else {
				dispatch(signout());
				dispatch(removeUser());
				navigate('/');
			}
		});
		return () => unsubscribe();
	}, []);
	return (
		<div className="w-screen px-8 py-2 absolute bg-gradient-to-b from-black z-10 flex justify-between">
			<img className="w-56" src={LOGO} alt="logo" />
			{isAuthenticated && (
				<div className="flex m-4 items-center">
					<img
						className=" w-14 h-14 object-cover rounded-md shadow-lg"
						src={USER_AVATAR}
						alt="signed in user icon"
					/>
					<span
						onClick={handleSignout}
						className="p-2 font-semibold text-[1.25rem] cursor-pointer hover:text-gray-600 duration-200"
					>
						Sign out
					</span>
				</div>
			)}
		</div>
	);
};

export default Header;
