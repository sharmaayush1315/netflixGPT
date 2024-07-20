import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const navigate = useNavigate();
	const handleSignout = () => {
		signOut(auth)
			.then(() => {
				navigate('/');
			})
			.catch((error) => {
				navigate('/error');
			});
	};
	return (
		<div className="w-screen px-8 py-2 absolute bg-gradient-to-b from-black z-10 flex justify-between">
			<img
				className="w-56"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="Netflix-logo"
			/>
			{isAuthenticated && (
				<div className="flex m-4 items-center">
					<img
						className=" w-14 h-14 object-cover rounded-md shadow-lg"
						src="https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcdk1iCbqnp0L9eChv7Q8IHGZ2WTy26xTot4zHhnhnjjBiVicIkUNo9qBqvdD49rOnefHYhJ_ghofRGnfHobQ87SzOh_J4E.png?r=a4f"
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
