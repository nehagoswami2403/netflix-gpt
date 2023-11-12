// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChj7ytA86OtC0l8PqGsjWhHWM4mItFS90",
  authDomain: "netflixgpt-368b3.firebaseapp.com",
  projectId: "netflixgpt-368b3",
  storageBucket: "netflixgpt-368b3.appspot.com",
  messagingSenderId: "583863303298",
  appId: "1:583863303298:web:952e33f6a0354e4aa0c89b",
  measurementId: "G-CV0FPG4BK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
