import { createSlice } from '@reduxjs/toolkit';
const initialState = { isAuthenticated: false };
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signIn: (state) => {
			state.isAuthenticated = true;
		},
		signOut: (state) => {
			state.isAuthenticated = false;
		},
	},
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
