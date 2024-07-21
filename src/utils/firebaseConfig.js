import { getAuth } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: 'netflixgpt-buzz.firebaseapp.com',
	projectId: 'netflixgpt-buzz',
	storageBucket: 'netflixgpt-buzz.appspot.com',
	messagingSenderId: '1067420880015',
	appId: '1:1067420880015:web:0cffc26b60f9ab5ec3f4fa',
	measurementId: 'G-S82PHZC3FN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
