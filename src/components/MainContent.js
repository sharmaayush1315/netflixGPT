import React from 'react';
import { useSelector } from 'react-redux';
import VideoPlayer from './VideoPlayer';
import VideoData from './VideoData';

const MainContent = () => {
	const movies = useSelector((state) => state.movies?.nowPlayingMovies);
	if (!movies) return;
	const mainMovie = movies[2];
	const { original_title, overview, id } = mainMovie;
	return (
		<div className="">
			<VideoData movieTitle={original_title} description={overview} />
			<VideoPlayer id={id} />
		</div>
	);
};

export default MainContent;
