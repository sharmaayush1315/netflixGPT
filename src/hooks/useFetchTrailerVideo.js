import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';

const useFetchTrailer = (id) => {
	const dispatch = useDispatch();
	const getMovieTrailer = async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos`,
			TMDB_API_OPTIONS
		);
		const json = await response.json();
		const trailers = json.results.filter((video) => video.type == 'Trailer');

		const liveTrailer = trailers.length ? trailers[0] : json.results[0];
		dispatch(addTrailerVideo(liveTrailer));
	};
	useEffect(() => {
		getMovieTrailer();
	}, []);
};

export default useFetchTrailer;
