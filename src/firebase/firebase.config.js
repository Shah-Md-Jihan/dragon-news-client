// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmBmLX92jyX4c7J6qnblj4YaheipQpEh8",
    authDomain: "dragon-news-ff00e.firebaseapp.com",
    projectId: "dragon-news-ff00e",
    storageBucket: "dragon-news-ff00e.appspot.com",
    messagingSenderId: "477643326647",
    appId: "1:477643326647:web:70542d029477f32fc57932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;