import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';

const Body = () => {
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

	return (
		<div className="m-0 p-0 box-border">
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
