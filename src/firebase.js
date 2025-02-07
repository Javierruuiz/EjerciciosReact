// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyw8qKjMVbPikZhOxC7uHM4sEgK1EewYs",
  authDomain: "pokeapi-6a5f6.firebaseapp.com",
  projectId: "pokeapi-6a5f6",
  storageBucket: "pokeapi-6a5f6.firebasestorage.app",
  messagingSenderId: "1035373749616",
  appId: "1:1035373749616:web:dc2177bbed3239eb17dbb5",
  measurementId: "G-QWW8BFMJ0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db  = getFirestore(app);

const auth = getAuth();
export {auth}
export {db}
