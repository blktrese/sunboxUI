// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCst4W-9HuZKHrb98l5CCy80cXly7W4NOE",
  authDomain: "sunbox-auth.firebaseapp.com",
  projectId: "sunbox-auth",
  storageBucket: "sunbox-auth.firebasestorage.app",
  messagingSenderId: "267072963871",
  appId: "1:267072963871:web:e5afc4df172e7a2bed1c2a"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
