import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { signIn, signOut } from '../utils/authSlice';

const Body = () => {
	const dispatch = useDispatch();
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Login />,
		},
		{
			path: '/browse',
			element: <Browse />,
		},
	]);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, displayName, email } = user;
				dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
				dispatch(signIn());
			} else {
				dispatch(signOut());
				dispatch(removeUser());
			}
		});
	}, []);
	return (
		<div className="m-0 p-0 box-border">
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
