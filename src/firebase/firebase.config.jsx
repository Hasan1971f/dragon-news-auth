// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1YLOSDtbgmeTI-UuYYXSEFcXD6I3j6ds",
  authDomain: "dragon-news-37d3e.firebaseapp.com",
  projectId: "dragon-news-37d3e",
  storageBucket: "dragon-news-37d3e.firebasestorage.app",
  messagingSenderId: "1047987675830",
  appId: "1:1047987675830:web:2e1db7fa4e5629eaa1fc17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app