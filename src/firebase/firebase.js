// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfCMs__8J5N6WtfVUJSIVaigX0JbN9BEY",
  authDomain: "trabaholishit.firebaseapp.com",
  projectId: "trabaholishit",
  storageBucket: "trabaholishit.appspot.com",
  messagingSenderId: "426275032990",
  appId: "1:426275032990:web:771b85184236f7e499508f",
  measurementId: "G-5XSFEG95RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const analytics = getAnalytics(app);

export { app, auth}