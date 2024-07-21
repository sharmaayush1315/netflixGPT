import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlatingMovies';
import MainContent from './MainContent';

const Browse = () => {
	useNowPlayingMovies();
	return (
		<div>
			<Header />
			<MainContent />
		</div>
	);
};

export default Browse;
