import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();
	const getNowPlayingMovies = async () => {
		const response = await fetch(
			'https://api.themoviedb.org/3/movie/now_playing?page=1',
			TMDB_API_OPTIONS
		);
		const json = await response.json();
		dispatch(addNowPlayingMovies(json.results));
	};
	useEffect(() => {
		getNowPlayingMovies();
	}, []);
};

export default useNowPlayingMovies;
