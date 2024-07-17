// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.GOOGLE_API_KEY,
	authDomain: 'netflixgpt-35c96.firebaseapp.com',
	projectId: 'netflixgpt-35c96',
	storageBucket: 'netflixgpt-35c96.appspot.com',
	messagingSenderId: '793542863649',
	appId: '1:793542863649:web:94a73a14a31cf08ed36c60',
	measurementId: 'G-MV8450G008',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
