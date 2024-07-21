import React from 'react';
import { useSelector } from 'react-redux';
import VideoPlayer from './VideoPlayer';
import VideoData from './VideoData';

const MainContent = () => {
	const movies = useSelector((state) => state.movies?.nowPlayingMovies);
	if (!movies) return;
	const mainMovie = movies[0];
	console.log(mainMovie);
	const { original_title, overview } = mainMovie;
	return (
		<div>
			<VideoData movieTitle={original_title} description={overview} />
			<VideoPlayer />
		</div>
	);
};

export default MainContent;
