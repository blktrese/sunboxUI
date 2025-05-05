// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import getAuth for authentication
import { getAnalytics } from "firebase/analytics"; // This is for analytics, if you use it
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAotzXnCdaP9YxfK6lhQb7hD4ItgGfc73s",
  authDomain: "sunbox-53ae6.firebaseapp.com",
  projectId: "sunbox-53ae6",
  storageBucket: "sunbox-53ae6.firebasestorage.app",
  messagingSenderId: "169269077951",
  appId: "1:169269077951:web:5fa186f91ee013473c230a",
  measurementId: "G-LL05PBTE8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);  // Add this line to export `auth`

// Initialize Firebase Analytics (Optional)
const analytics = getAnalytics(app);

export default app;
