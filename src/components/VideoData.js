import React from 'react';

const VideoData = ({ movieTitle, description }) => {
	return (
		<div className="w-screen aspect-video pt-[25%] p-12 px-18 absolute  text-white bg-gradient-to-r from-black	 via-transparent ">
			<h1 className="font-bold text-6xl mb-2">{movieTitle}</h1>
			<p className="w-1/4 py-2 text-[1.25rem]">{description}</p>
			<div className="mt-8">
				<button className="bg-white text-black px-16 py-4 hover:bg-opacity-80 duration-100 font-bold text-[1.25rem] py-2 rounded-md ">
					<span>
						<i class="fa-solid fa-play"></i>&nbsp;&nbsp;
					</span>
					Play
				</button>
				<button className="bg-gray-700 bg-opacity-60 text-white hover:bg-opacity-80 duration-100 px-16 py-4 font-bold text-[1.25rem] py-2 ml-2 rounded-md ">
					<span>
						<i class="fa-solid fa-circle-info"></i>&nbsp;&nbsp;
					</span>
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoData;
