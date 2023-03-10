// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqAQDWkMAWO7Uhk2AR8SqTwZnXxRWLz0",
  authDomain: "placeqr-26a3f.firebaseapp.com",
  projectId: "placeqr-26a3f",
  storageBucket: "placeqr-26a3f.appspot.com",
  messagingSenderId: "679679911779",
  appId: "1:679679911779:web:c277837682b63b89cfd556",
  measurementId: "G-HM0H8QB3PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);