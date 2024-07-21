import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';
import moviesReducer from './movieSlice';
const appStore = configureStore({
	reducer: {
		user: userReducer,
		auth: authReducer,
		movies: moviesReducer,
	},
});

export default appStore;
