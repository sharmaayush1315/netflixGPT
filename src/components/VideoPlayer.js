import React from 'react';
import useFetchTrailer from '../hooks/useFetchTrailerVideo';
import { useSelector } from 'react-redux';

const VideoPlayer = ({ id }) => {
	useFetchTrailer(id);
	const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

	return (
		<div className="">
			<iframe
				className="w-screen  h-screen aspect-video"
				src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
			></iframe>
		</div>
	);
};

export default VideoPlayer;
