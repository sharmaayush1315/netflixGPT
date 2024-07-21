import React from 'react';

const VideoData = ({ movieTitle, description }) => {
	return (
		<div>
			<h1>{movieTitle}</h1>
			<p>{description}</p>
			<div>
				<button>Play</button>
				<button>More Info</button>
			</div>
		</div>
	);
};

export default VideoData;
