import React, { useEffect } from 'react';
import Header from './Header';
import { TMDB_API_OPTIONS } from '../utils/constants';

const Browse = () => {
	const getNowPlayingMovies = async () => {
		const response = await fetch(
			'https://api.themoviedb.org/3/movie/now_playing?page=1',
			TMDB_API_OPTIONS
		);
		const json = await response.json();
		console.log(json);
	};
	useEffect(() => {
		getNowPlayingMovies();
	}, []);
	return (
		<div>
			<Header />
		</div>
	);
};

export default Browse;
